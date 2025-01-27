import SectionTitle from '../../components/SectionTitle/SectionTitle';
import userDefaultImage from "../../assets/user.png"
import { useGetSingleUserQuery } from '../../redux/features/Admin/admin.api';
import { useAppSelector } from '../../redux/hook';
import { TUser, useCurrentToken } from '../../redux/features/Auth/authSlice';
import { verifyToken } from '../../utils/verifytoken';

const AdminProfile = () => {
    const token = useAppSelector(useCurrentToken);
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate()
    let user;
    if (token) {
        user = verifyToken(token) as TUser;
    }
    console.log(user);
    const { data } = useGetSingleUserQuery(user?.email);
    console.log(data);

    return (
        <div>
            <SectionTitle heading={"Transaction Overview"} subHeading={"See an overview of all payments made through the platform, including transaction types, amounts, and statuses."}></SectionTitle>
            <div className="flex lg:flex-row flex-col gap-5 p-5 mt-5">
                <div className=" flex-1 bg-white p-5 rounded-lg space-y-5">
                    <img src={userDefaultImage} className=" w-64 mx-auto" alt="" />
                    {/* <h2 className="text-center text-3xl font-semibold">{user?.displayName}</h2> */}
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-4xl font-semibold">Your info</h2>
                    {/* <p className="text-2xl flex items-center text-blue-500 gap-2 font-semibold"><AiOutlineMail /> {user?.email}</p> */}
                </div>
            </div>
            <div className="px-8">
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="bg-red-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Total Revenue</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{totalPrice}$</h1> */}
                    </div>

                    <div className="bg-blue-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Total Order</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{totalOrder}</h1> */}
                    </div>

                    <div className="bg-orange-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Total Users</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{totalUser?.length}</h1> */}
                    </div>

                    <div className="bg-green-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Total Seller</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{seller?.length}</h1> */}
                    </div>
                    <div className="bg-amber-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Pending Ads</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{pending?.length}</h1> */}
                    </div>

                    <div className="bg-teal-300 rounded p-5 space-y-2">
                        <h2 className="text-xl text-gray-600 text-center font-semibold">Running Ads</h2>
                        {/* <h1 className="text-3xl text-center font-bold text-gray-900">{ads?.length - pending?.length}</h1> */}
                    </div>
                </div>
            </div>


        </div >
    );
};

export default AdminProfile;