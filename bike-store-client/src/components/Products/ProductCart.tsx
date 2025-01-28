import { toast } from 'sonner';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useAppDispatch,  } from '../../redux/hook';
import { TProduct } from '../../types/productsType';

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
                    <h2 className="card-title text-[#22292f]">{item.name}</h2>
                    <p className='text-sm'>Brand: {item.brand}</p>
                    <p className='text-sm'>Model: {item.category}</p>
                </div>
                <div className="card-actions flex flex-col mt-3">
                    <h3 className='text-2xl font-semibold'>${item.price}</h3>
                    <button onClick={() => handleAddCart()} className="px-2 cursor-pointer w-full py-1 rounded bg-[#22292f] text-sm hover:bg-black text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;