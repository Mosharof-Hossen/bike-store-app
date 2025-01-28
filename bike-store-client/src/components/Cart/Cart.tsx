import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addToCart, clearCart, decreaseQuantityOfItem, ICartItem, removeItemFromCart, totalCartItems } from '../../redux/features/cart/cartSlice';
import { toast } from 'sonner';
import { FaArrowLeft, FaArrowRight, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { verifyToken } from '../../utils/verifytoken';
import { TUser, useCurrentToken } from '../../redux/features/Auth/authSlice';
import { useEffect } from 'react';
import { useCreateOrderMutation } from '../../redux/features/Order/Order.api';

const Cart = () => {
    const cartItems = useAppSelector(totalCartItems);
    const dispatch = useAppDispatch()
    const token = useAppSelector(useCurrentToken);
    const navigate = useNavigate();
    const [createOrder, { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation()


    let user: TUser;
    if (token) {
        user = verifyToken(token) as TUser;
    }
    const increaseQuantity = (item: ICartItem) => {
        if (item.InStock > item.quantity) {
            dispatch(addToCart(item))
        } else {
            toast.error("Out of Stock")
        }
    };
    const decreaseQuantity = (item: ICartItem) => {
        if (item.quantity > 1) {
            dispatch(decreaseQuantityOfItem(item))
        }
    }
    const removeItem = (id: string) => {
        dispatch(removeItemFromCart(id));
    }

    const handleCheckout = async () => {
        if (!user) {
            navigate("/login")
        }
        const orderData = {
            ...cartItems,
            items: cartItems.items.map((item) => {
                return { product: item.product, quantity: item.quantity }
            })
        }
       
        await createOrder(orderData);
    }

    const toastId = "cart";
    useEffect(() => {
        if (isSuccess) {
            toast.success(data?.message, { id: toastId });
            if (data?.data) {
                setTimeout(() => {
                    window.location.href = data.data;
                    dispatch(clearCart())
                }, 1000);
            }
        }

        if (isError) toast.error(JSON.stringify(error), { id: toastId });
    }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

    return (
        <div className='p-10'>
            <h1 className='text-[#22292f] font-bold text-2xl py-5'>Shopping Cart</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartItems?.items.map((item, i) => <tr key={item.product}>
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-14 rounded-xl">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </th>
                                <td>{item.name}</td>
                                <td>
                                    <div className="flex items-center gap-1  p-2 rounded-lg w-32 bg-white ">
                                        <button
                                            onClick={() => decreaseQuantity(item)}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="text"
                                            className="w-10 text-center border-none outline-none bg-transparent"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <button
                                            onClick={() => increaseQuantity(item)}
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td>${item.price}</td>
                                <td>${item.price * item.quantity}</td>
                                <td><button className='cursor-pointer' onClick={() => removeItem(item.product)}><FaTrash className="text-2xl text-red-500"></FaTrash></button></td>


                                {/* <td><button onClick={() => handleItemView(item)} className='flex items-center '><FaEye className='text-2xl text-green-500' /></button></td> */}
                                {/* <td><button className='cursor-pointer' onClick={() => openModal(item)}><FaEdit className="text-2xl text-primary-c"></FaEdit></button></td>
                                <td><button className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl text-red-500"></FaTrash></button></td> */}
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th className='text-xl text-[#22292f]'>Total Quantity:</th>
                            <th className='text-xl text-[#22292f]'>{cartItems.totalQuantity}</th>
                            <th className='text-xl text-[#22292f]'>Total Price:</th>
                            <th className='text-xl text-[#22292f]'>${cartItems.totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className='flex justify-between my-10'>
                <Link to={"/shop"}>
                    <button className="btn cursor-pointer  rounded bg-[#22292f]  hover:bg-black text-white"><FaArrowLeft></FaArrowLeft> Continue Shopping</button>
                </Link>
                <button onClick={() => handleCheckout()} className="btn cursor-pointer  rounded bg-blue-500  hover:bg-blue-600 text-white">Confirm Order <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    );
};

export default Cart;