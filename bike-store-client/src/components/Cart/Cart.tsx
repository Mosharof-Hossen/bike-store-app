import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addToCart, ICartItem, totalCartItems } from '../../redux/features/cart/cartSlice';
import { toast } from 'sonner';

const Cart = () => {
    const cartItems = useAppSelector(totalCartItems);
    const dispatch = useAppDispatch()
    console.log({ cartItems });

    const increaseQuantity = (item: ICartItem) => {
        if (item.InStock > item.quantity) {
            dispatch(addToCart(item))
        } else {
            toast.error("Out of Stock")
        }
    };
    const decreaseQuantity = (item: ICartItem) => {
        if (item.quantity > 1) {
            dispatch(addToCart(item))
        }
    }



    return (
        <div className='p-10'>
            <h1 className='text-[#22292f] font-bold text-2xl'>Shopping Cart</h1>
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

                                {/* <td><button onClick={() => handleItemView(item)} className='flex items-center '><FaEye className='text-2xl text-green-500' /></button></td> */}
                                {/* <td><button className='cursor-pointer' onClick={() => openModal(item)}><FaEdit className="text-2xl text-primary-c"></FaEdit></button></td>
                                <td><button className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl text-red-500"></FaTrash></button></td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;