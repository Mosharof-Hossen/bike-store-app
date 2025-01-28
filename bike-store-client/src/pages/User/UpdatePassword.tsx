import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useUpdatePasswordMutation } from '../../redux/features/Admin/admin.api';
import { TResponse } from '../../types/global.type';
import { TUserAdmin } from '../../types/user.type';
import { toast } from 'sonner';
import { useAppDispatch } from '../../redux/hook';
import { logout } from '../../redux/features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [updatePassword] = useUpdatePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const res = await updatePassword(data) as TResponse<TUserAdmin>;
        if (res.error) {
            toast.error("Provide Valid Old Password");
        } else {
            toast.success("Password Updated Successfully. Please Login Again")
            navigate("/login")
            dispatch(logout())
        }
        console.log(res);

    }
    return (
        <div className='flex justify-center py-10'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl    border m-5">
                <h1 className="text-2xl font-bold text-center">Update Password</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label className="block ">Old Password</label>
                        <input type="text" id="oldPassword" placeholder="Old Password"  {...register("oldPassword", { required: true })} className="w-full px-4 py-3 rounded-md" />
                        {
                            errors?.oldPassword && <p><small className="text-red-500">Old Password is Required</small></p>
                        }

                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block ">New Password</label>
                        <input type="text" id="newPassword" placeholder="New Password"  {...register("newPassword", { required: true, })} className="w-full px-4 py-3 rounded-md" />
                        {
                            errors?.newPassword && <p><small className="text-red-500">New Password is Required</small></p>
                        }
                    </div>
                    <button className="bg-[#22292f] hover:bg-black block w-full p-3 text-center text-white rounded-sm ">Update</button>

                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;