import bgImage from "../../assets/login/bg2.png"
import { Link } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)
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
                        <label  className="block ">Email</label>
                        <input type="email"  id="email"  placeholder="Email"  {...register("email", { required: true })}  className="w-full px-4 py-3 rounded-md"  />
                        {
                            errors?.email && <p><small className="text-red-500">Email is Required</small></p>
                        }
                    </div>
                    <div className="space-y-1 text-sm">
                        <label  className="block ">Password</label>
                        <input type="password"   id="password" placeholder="Password"  {...register("password", { required: true })}  className="w-full px-4 py-3 rounded-md" />
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