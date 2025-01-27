import { useGetAllUsersQuery, useUserStatusChangeMutation } from '../../redux/features/Admin/admin.api';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { toast } from 'sonner';

const ManageUsers = () => {
    const [statusChange] = useUserStatusChangeMutation();
    const { data: allUser, isFetching } = useGetAllUsersQuery(undefined);
    console.log(allUser);
    const handleBlock = async (block: boolean, id: string) => {
        console.log({ block, id });
        const statusChangeData = {
            block, id
        }
        const res = await statusChange(statusChangeData)
        console.log({ res });
        if (res.data) {
            toast.success("Successfully Status Changed")

        }
        if (res.error) {
            toast.success("Something Wrong.")
        }
    }
    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Control User Accounts"} subHeading={"Ensure a safe marketplace with proper user management tools."}></SectionTitle>
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Roll</th>
                                        <th>Status</th>
                                        <th>Update Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        allUser?.data?.map((item, i) => <tr key={item._id}>
                                            <th>{i + 1}</th>

                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.role}</td>
                                            <td>{String(item.block) === "false" ? "Active" : "Blocked"}</td>
                                            <td>
                                                <input onClick={() => handleBlock(!item.block, item._id)} key={item._id} defaultChecked={item.block} type="checkbox" className="toggle toggle-error toggle-xl" />
                                            </td>

                                            {/* <td><button className='cursor-pointer' onClick={() => handleItemEdit(item._id)}><FaEdit className="text-2xl text-primary-c"></FaEdit></button></td>
                                            <td><button className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl text-red-500"></FaTrash></button></td> */}
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

export default ManageUsers;