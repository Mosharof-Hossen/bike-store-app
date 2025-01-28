/* eslint-disable @typescript-eslint/no-unused-vars */
import bgImage from "../../assets/login/bg2.png"
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from "../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { TUserLoginResponse } from "../../types/auth.type";
import { TResponse } from "../../types/global.type";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../redux/hook";
import { setUser, TUser } from "../../redux/features/Auth/authSlice";

const Login = () => {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "user@user.com",
            password: "123456"
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = await login(data) as TResponse<TUserLoginResponse>;
        let user;

        try {
            const user = jwtDecode(res.data?.data?.accessToken as string) as TUser;
            dispatch(setUser({ user: user, token: res.data?.data.accessToken }));
        } catch (err) {
            toast.error(res.error?.data.message)
        }

        console.log(user);
        
        if (res.error) {
            toast.error(res.error?.data.message)
        }
        else {
            toast.success(res.data?.message)
            navigate("/")
        }
    }
    return (
        <div
            className='h-screen bg-cover bg-center flex items-center justify-end '
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl   text-white border m-5">
                <h1 className="text-2xl font-bold text-center">Log in</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label className="block ">Email</label>
                        <input type="email" id="email" placeholder="Email"  {...register("email", { required: true })} className="w-full px-4 py-3 rounded-md" />
                        {
                            errors?.email && <p><small className="text-red-500">Email is Required</small></p>
                        }

                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block ">Password</label>
                        <input type="password" id="password" placeholder="Password"  {...register("password", { required: true, })} className="w-full px-4 py-3 rounded-md" />
                        {
                            errors?.password && <p><small className="text-red-500">Password is Required</small></p>
                        }
                    </div>
                    <button className="bg-[#22292f] hover:bg-black block w-full p-3 text-center rounded-sm ">Login</button>

                    <div>
                        <p className="text-center font-semibold">Dont have account? <Link to={"/sign-up"}> <span className="underline">Sign up here</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;