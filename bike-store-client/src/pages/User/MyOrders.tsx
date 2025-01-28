import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import moment from "moment"
import { TUserOwnOrder } from '../../types/order.type';
import { useGetUserOwnOrdersQuery } from '../../redux/features/Order/Order.api';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { data, isFetching } = useGetUserOwnOrdersQuery(undefined);
    console.log({ data });
    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Track Your Orders"} subHeading={"Check your order details, status, and delivery updates easily."}></SectionTitle>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="bg-white p-5 rounded">
                        <div className="flex justify-between items-center my-5">
                            {/* <button onClick={handleAddItem} className="flex items-center bg-green-500 hover:bg-green-600 text-white gap-2 btn">Add Item <FaPlus></FaPlus></button> */}
                            {/* <h3 className="text-2xl font-semibold ">Total Item: {items?.length}</h3> */}
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className='font-bold text-[#22292f]'>
                                        <th></th>
                                        <th>Transaction Id</th>
                                        <th>Total Product</th>
                                        <th>Total Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        (data?.data as TUserOwnOrder[])?.map((order, i) => <tr key={order._id}>
                                            <td>{i + 1}</td>
                                            <td>{order.transaction.id}</td>
                                            <td>{order.products?.length}</td>
                                            <td>${order.totalPrice}</td>
                                            <td>{order.status}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-center mt-5'>
                        <Link to={"/user/dashboard/Payment-history"}><button className="btn cursor-pointer  rounded bg-[#22292f]  hover:bg-black text-white">Details</button></Link>
                        </div>

                    </div>
            }
        </div>
    );
};

export default MyOrders;