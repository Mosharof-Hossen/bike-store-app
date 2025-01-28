import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import moment from "moment"
import { TUserOwnOrder } from '../../types/order.type';
import { useGetUserOwnOrdersQuery } from '../../redux/features/Order/Order.api';

const MyOrders = () => {
    const { data, isFetching } = useGetUserOwnOrdersQuery(undefined);
    console.log({ data });
    return (
        <div className='px-10 space-y-5'>
            <SectionTitle heading={"Track Your Orders"} subHeading={"Check your order details, status, and delivery updates easily."}></SectionTitle>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="bg-white p-5 rounded space-y-8 text-sm">


                        {

                            (data?.data as TUserOwnOrder[])?.map((item,) => <div
                                key={item._id}

                            >
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    <div className='space-y-4'>
                                        <div className='space-y-1'>
                                            <h3 className='text-xl font-bold'>Customer information:</h3>
                                            <p><span className='font-semibold'>User Id: </span>{item.user}</p>
                                            <p><span className='font-semibold'>Order Date: </span>{moment(item.createdAt).format('YYYY-MM-DD h:mm:ss A')}</p>
                                            <p><span className='font-semibold'>Last Update: </span>{moment(item.createdAt).format('YYYY-MM-DD h:mm:ss A')}</p>
                                        </div>
                                        <div className='space-y-1'>
                                            <h3 className='text-xl font-bold'>Products:</h3>
                                            {
                                                item.products.map((product) => <div key={product._id}>
                                                    <p><span className='font-semibold'>Product Id: </span>{product.product}, <span className='font-semibold'>Quantity: </span> {product.quantity}</p>
                                                </div>)
                                            }
                                        </div>
                                    </div>

                                    <div className='space-y-4'>
                                        <div className='space-y-1'>
                                            <h3 className='text-xl font-bold'>Order Summary:</h3>
                                            <p><span className='font-semibold'>Total Price: </span>{item.totalPrice}</p>
                                            <p className=''><span className='font-semibold'>Status: </span>{item.status}</p>
                                        </div>
                                        <div className='space-y-1'>
                                            <h3 className='text-xl font-bold'>Transaction Details:</h3>
                                            <p><span className='font-semibold'>Transaction Id: </span>{item.transaction.id}</p>
                                            <p><span className='font-semibold'>Payment Method: </span>IBanking</p>
                                            <p><span className='font-semibold'>Transaction Date: </span>{moment(item.updatedAt).format('YYYY-MM-DD h:mm:ss A')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>

                            </div>
                            )
                        }

                    </div>
            }



        </div >
    );
};

export default MyOrders;