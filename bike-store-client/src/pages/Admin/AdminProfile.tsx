import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { AiOutlineMail } from "react-icons/ai";
import userDefaultImage from "../../assets/user.png"
import { useGetAllUsersQuery, useGetSingleUserQuery } from '../../redux/features/Admin/admin.api';
import { useAppSelector } from '../../redux/hook';
import { TUser, useCurrentToken } from '../../redux/features/Auth/authSlice';
import { verifyToken } from '../../utils/verifytoken';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import { useGetAllOrdersQuery } from '../../redux/features/Order/Order.api';

const AdminProfile = () => {
    const token = useAppSelector(useCurrentToken);
    const { data: allOrders } = useGetAllOrdersQuery(undefined);
    let user;
    if (token) {
        user = verifyToken(token) as TUser;
    }

    const { data: userInfo, isFetching } = useGetSingleUserQuery(user?.email);
    const { data: allUser } = useGetAllUsersQuery(undefined);

    const totalUser = allUser?.data?.filter((item) => item.role === "customer")
    const totalRevenue = allOrders?.data?.reduce((total, item) => total + item.totalPrice, 0);
    console.log({totalRevenue});
    return (
        <div>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div>

                        <SectionTitle heading={"Transaction Overview"} subHeading={"See an overview of all payments made through the platform, including transaction types, amounts, and statuses."}></SectionTitle>
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

                                <div className="bg-orange-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Total Users</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{totalUser?.length}</h1>
                                </div>

                                <div className="bg-red-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Total Revenue</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{totalRevenue}$</h1>
                                </div>

                                <div className="bg-blue-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Total Order</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">{allOrders?.data?.length}</h1>
                                </div>


                                <div className="bg-teal-300 rounded p-5 space-y-2">
                                    <h2 className="text-xl text-gray-600 text-center font-semibold">Running Ads</h2>
                                    <h1 className="text-3xl text-center font-bold text-gray-900">Coming Soon..</h1>
                                </div>
                            </div>
                        </div>


                    </div >
            }
        </div>
    );
};

export default AdminProfile;