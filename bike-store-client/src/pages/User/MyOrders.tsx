import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import moment from "moment"
import { TUserOwnOrder } from '../../types/order.type';
import { useGetUserOwnOrdersQuery } from '../../redux/features/Order/Order.api';

const MyOrders = () => {
    const { data, isFetching } = useGetUserOwnOrdersQuery(undefined);
    console.log({data});
    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Control Your Inventory"} subHeading={"Add, edit, and manage your bike listings effortlessly."}></SectionTitle>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="bg-white p-5 rounded">


                        {

                            (data?.data as TUserOwnOrder[])?.map((item) => <div key={item._id}>

                                <div>
                                    <div>
                                        <h3 className='text-xl font-bold'>Customer information:</h3>
                                        <p><span className='font-semibold'>User Id: </span>{item.user}</p>
                                        <p><span className='font-semibold'>Order Date: </span>{moment(item.createdAt).format('YYYY-MM-DD h:mm:ss A')}</p>
                                        <p><span className='font-semibold'>Last Update: </span>{moment(item.createdAt).format('YYYY-MM-DD h:mm:ss A')}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-bold'>Products:</h3>
                                    </div>
                                </div>
                            </div>
                            )
                        }

                    </div>
            }



        </div >
    );
};

export default MyOrders;