import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../redux/features/products/product.api';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useAppDispatch } from '../../redux/hook';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { TProduct } from '../../types/productsType';
import { toast } from 'sonner';

const ProductDetails = () => {
    const { id } = useParams() as { id: string };
    const dispatch = useAppDispatch()

    const { data: product, } = useGetSingleProductQuery(id, { skip: !id });
    const handleAddCart = (item: TProduct | undefined) => {
        if (item) {
            dispatch(addToCart({
                product: item?._id, // Product ID
                name: item?.name,
                price: item?.price,
                quantity: 1,
                InStock: item?.quantity,
                image: item?.image,
            }))
            toast.success("Product Added To Cart")
        }

    }
    console.log(product);
    return (
        <div>
            <SectionTitle heading='Product Overview' subHeading='Explore the complete specifications, features, and details of this bike.'></SectionTitle>
            {
                product &&
                <div className="max-w-6xl mx-auto p-6 space-y-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="flex justify-center">
                            <img src={product?.data?.image} alt={product?.data?.image} className="w-full max-w-md rounded-lg shadow-lg" />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">{product?.data?.name}</h1>
                            <p className="text-gray-600">Brand: <span className="font-semibold">{product?.data?.brand}</span></p>
                            <p className="text-gray-600">Model: <span className="font-semibold">{product?.data?.model}</span></p>
                            <p className="text-gray-600">Category: <span className="font-semibold">{product?.data?.category}</span></p>

                            <div className="flex items-center space-x-4">
                                <p className="text-xl font-bold text-green-600">${product?.data?.price.toFixed(2)}</p>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold 
                                     ${product?.data?.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                    {product?.data?.inStock ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>


                            <div className="flex items-center space-x-4 mt-4">

                                <button
                                    className={`px-6 py-2 text-white font-semibold rounded-lg transition 
                                            ${product?.data?.inStock ? "bg-[#22292f] hover:bg-black" : "bg-gray-400 cursor-not-allowed"}`}
                                    disabled={!product?.data?.inStock}
                                    onClick={() => handleAddCart(product?.data)}
                                >
                                    {product?.data?.inStock ? "Add to Cart" : "Out of Stock"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700">{product?.data?.description}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;