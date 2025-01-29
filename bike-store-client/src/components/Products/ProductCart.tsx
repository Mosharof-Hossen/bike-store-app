import { toast } from 'sonner';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useAppDispatch, } from '../../redux/hook';
import { TProduct } from '../../types/productsType';
import { Link } from 'react-router-dom';

const ProductCart = ({ item }: { item: TProduct }) => {
    const dispatch = useAppDispatch()
    const { _id, name, price, quantity, image } = item;



    const handleAddCart = () => {
        dispatch(addToCart({
            product: _id, // Product ID
            name: name,
            price: price,
            quantity: 1,
            InStock: quantity,
            image: image,
        }))
        toast.success("Product Added To Cart")
    }

    return (
        <div className="card bg-base-100 w-full shadow-sm mx-auto ">
            <figure>
                <img
                    src={item.image}
                    alt="image" />
            </figure>
            <div className="p-2 md:p-3 space-y-1 flex justify-between flex-col">
                <div>
                    <Link to={`/product-details/${item._id}`}> <h2 className="card-title cursor-pointer hover:underline hover:text-blue-600 text-[#22292f]">{item.name}</h2></Link>
                    <p className='text-sm'>Brand: {item.brand}</p>
                    <p className='text-sm'>Model: {item.category}</p>
                </div>
                <div className="card-actions flex flex-col mt-3">
                    <h3 className='text-2xl font-semibold'>${item.price}</h3>
                    <button
                        className={`px-2  w-full py-1 text-white font-semibold rounded-lg transition 
                                            ${item.inStock ? "bg-[#22292f] cursor-pointer hover:bg-black" : "bg-gray-400 cursor-not-allowed"}`}
                        disabled={!item.inStock}
                        onClick={() => handleAddCart()}
                    >
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;