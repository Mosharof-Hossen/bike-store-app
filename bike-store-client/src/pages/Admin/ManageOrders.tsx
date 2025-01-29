import { useGetAllOrdersQuery, useVerifyOrderMutation } from '../../redux/features/Order/Order.api';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { toast } from 'sonner';
// const allStatus = ["Pending", "Paid", "Shipped", "Completed", "Cancelled"];


const ManageOrders = () => {
    const { data, isFetching } = useGetAllOrdersQuery(undefined);
    const [verifyOrder] = useVerifyOrderMutation();
    console.log(data?.data);

    const handleVerifyPayment = async (id: string) => {
        console.log(id);
        const res = await verifyOrder(id);
        if (res.data) {
            toast.success("Payment Verification Done")
        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, _id: string) => {
        const status = e.target.value;
        console.log({ status, _id });
    }
    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Control Your Inventory"} subHeading={"Add, edit, and manage your bike listings effortlessly."}></SectionTitle>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="bg-white p-5 rounded">

                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Email</th>
                                        <th>Total Price</th>
                                        <th>Payment Verified</th>
                                        <th>Verify?</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data?.data?.map((item, i) => <tr key={item._id}>
                                            <th>{i + 1}</th>
                                            <td>{item.email}</td>
                                            <td>${item.totalPrice}</td>
                                            <td className={`${item.verified ? "text-green-500" : "text-red-500"}`}>{item.verified ? "Yes" : "No"}</td>
                                            <td>
                                                <button onClick={() => handleVerifyPayment(item.transaction.id)} className={`btn ${item.verified ? "bg-green-300" : "bg-red-300"}`}>Verify</button>
                                            </td>
                                            <td>
                                                <button
                                                    className={`btn rounded-lg  text-center text-lg font-semibold 
                                                ${item.status === "Pending" ? "bg-yellow-100 text-yellow-800 shadow-yellow-300" : ""}
                                                ${item.status === "Paid" ? "bg-blue-100 text-blue-800 shadow-blue-300 " : ""}
                                                ${item.status === "Shipped" ? "bg-purple-100 text-purple-800 shadow-purple-300 " : ""}
                                                ${item.status === "Completed" ? "bg-green-100 text-green-800 shadow-green-300 " : ""}
                                                ${item.status === "Cancelled" ? "bg-red-100 text-red-800 shadow-red-300 " : ""}
                                              `}
                                                >{item.status}</button>
                                            </td>


                                            <td>
                                                <form>
                                                    <select defaultValue={item.status}
                                                        onChange={(e) => handleChange(e, item._id)}
                                                        style={{ width: "120px" }}

                                                        className={`select select-bordered text-lg font-semibold w-64 transition-all 
                                                            ${item.status === "Pending" ? "text-red-500 border-red-400 bg-red-100" : ""}
                                                            ${item.status === "Paid" ? "text-orange-500 border-orange-400 bg-orange-100" : ""}
                                                            ${item.status === "Shipped" ? "text-blue-500 border-blue-400 bg-blue-100" : ""}
                                                            ${item.status === "Completed" ? "text-green-500 border-green-400 bg-green-100" : ""}
                                                            ${item.status === "Cancelled" ? "text-gray-500 border-gray-400 bg-gray-100" : ""}
                                                          `}

                                                    >
                                                        <option className="text-red-500" value="Pending">Pending</option>
                                                        <option className="text-orange-500" value="Paid">Paid</option>
                                                        <option className="text-blue-500" value="Shipped">Shipped</option>
                                                        <option className="text-green-500" value="Completed">Completed</option>
                                                        <option className="text-gray-500" value="Cancelled">Cancelled</option>
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }



        </div>
    );
};

export default ManageOrders;