import CustomSpinner from '../../components/Spinner/CustomSpinner';
import { useGetSingleUserQuery } from '../../redux/features/Admin/admin.api';
import { useAppSelector } from '../../redux/hook';
import { TUser, useCurrentToken } from '../../redux/features/Auth/authSlice';
import { verifyToken } from '../../utils/verifytoken';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import userDefaultImage from "../../assets/user.png"
import { AiOutlineMail } from 'react-icons/ai';
import { useGetUserOwnOrdersQuery } from '../../redux/features/Order/Order.api';
import { TUserOwnOrder } from '../../types/order.type';

const UserProfile = () => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token) as TUser;
    }

    const { data: userInfo, isFetching: userFetching } = useGetSingleUserQuery(user?.email);

    const { data: orders, isFetching: orderFetching } = useGetUserOwnOrdersQuery(undefined);
    console.log(orders?.data);
    // "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled"
    const pendingProduct = orders?.data?.filter((order:TUserOwnOrder)=> order.status === "Pending")
    const shippedProduct = orders?.data?.filter((order:TUserOwnOrder)=> order.status === "Shipped")
    const completedProduct = orders?.data?.filter((order:TUserOwnOrder)=> order.status === "Completed")
    const cancelledProduct = orders?.data?.filter((order:TUserOwnOrder)=> order.status === "Cancelled")

    return (
        <div>
            {
                (userFetching && orderFetching) ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div>

                        <SectionTitle heading={"My Profile"} subHeading={"-----------------------------------------"}></SectionTitle>
                        <div className="flex lg:flex-row flex-col gap-5 p-5 mt-5">
                            <div className=" flex-1 bg-white p-5 rounded-lg space-y-5">
                                <img src={userDefaultImage} className=" w-64 mx-auto" alt="" />
                                <h2 className="text-center text-3xl font-semibold">{userInfo?.data?.name}</h2>
                            </div>
                            <div className="flex-1 space-y-3">
                                <h2 className="text-4xl font-semibold">Your info</h2>
                                <p className="text-2xl flex items-center text-blue-500 gap-2 font-semibold"><AiOutlineMail /> {userInfo?.data?.email}</p>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="grid grid-cols-2 gap-5 my-5">

                                <div className="bg-blue-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Total Transaction</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{orders?.data?.length}</h1>
                                </div>

                                <div className="bg-green-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Pending Order</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{pendingProduct?.length}</h1>
                                </div>

                                <div className="bg-orange-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Shipped Order</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{shippedProduct?.length}</h1>
                                </div>

                                <div className="bg-red-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Completed Order</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{completedProduct?.length}</h1>
                                </div>
                                <div className="bg-amber-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Cancelled Order</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{cancelledProduct?.length}</h1>
                                </div>

                            </div>
                        </div>


                    </div >
            }
        </div>
    );
};

export default UserProfile;