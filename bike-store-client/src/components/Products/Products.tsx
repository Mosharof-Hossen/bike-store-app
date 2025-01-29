import { useGetAllProductsQuery } from '../../redux/features/products/product.api';
import CustomSpinner from '../Spinner/CustomSpinner';
import ProductCart from './ProductCart';
import { TProduct } from '../../types/productsType';
import { TMeta } from '../../types/global.type';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
    const { data, isFetching } = useGetAllProductsQuery({inStock:true,limit:8}) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };
    console.log(data, isFetching);

    return (
        <div className='space-y-10 mt-10'>
            <div className='text-center space-y-4 px-10'>
                <h1 className='text-[#22292f] text-4xl font-bold'>Top Picks for You</h1>
                <p className='text-gray-500'>Discover high-quality bikes at unbeatable prices, just for you!</p>
            </div>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div>
                        <div className=' grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-8 px-2 md:px-0'>
                            {
                                data?.data?.map((item: TProduct) => <ProductCart key={item._id} item={item}></ProductCart>)
                            }
                        </div>
                        <div className='flex justify-center mt-8'>
                            <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white">More <FaArrowRight></FaArrowRight></button></Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Products;