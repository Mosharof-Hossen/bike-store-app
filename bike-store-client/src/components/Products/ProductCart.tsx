import { TProduct } from '../../types/productsType';

const ProductCart = ({ item }: { item: TProduct }) => {
    console.log(item);
    return (
        <div className="card bg-base-100 w-full shadow-sm mx-auto">
            <figure>
                <img
                    src={item.image}
                    alt="image" />
            </figure>
            <div className="p-2 md:p-3 space-y-1">
                <h2 className="card-title text-[#22292f]">{item.name}</h2>
                <p className='text-sm'>Brand: {item.brand}</p>
                <p className='text-sm'>Model: {item.model}</p>
                <div className="card-actions flex justify-between items-center mt-3">
                    <h3 className='text-2xl font-semibold'>${item.price}</h3>
                    <button className="px-2 py-1 rounded bg-[#22292f] hover:bg-black text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;