import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Login = () => {
    const { signIn,googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        try{
            const result = await signIn(data.email, data.password);
            console.log(result);
            toast.success('Signin Successful');
            navigate(location?.state ? location.state : '/')
        }
        catch(err){
            toast.error(err?.message)
        }
    }


    const handleSocialLogin = async socialProvider=>{
        await socialProvider();
        try{
            toast.success('Signup Successful');
            navigate(location?.state ? location.state : '/')
        }
        catch(err){
            toast.error(err?.message)
        }
    }
    
    return (
        <div>
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
                {/* Input fields and the form started */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div className="space-y-2 text-sm">
                        <label htmlFor="password" className="block ">
                            Email
                        </label>
                        <input type="email" name="email" id="password" {...register("email", {required:true})} placeholder="Email" className="w-full px-4 py-3 rounded-md border border-indigo-300  " />
                        {errors.email && <span className="text-red ">This field is required</span>}

                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="block ">
                                Password
                            </label>
                            <p className="absolute mt-10 ml-[21rem]">Show</p>
                        </div>
                        <input type="password" name="password"  placeholder="Password" {...register("password", {required:true})}className="w-full px-4 py-3 rounded-md border border-indigo-300  " />
                        {errors.password && <span className="text-red ">This field is required</span>}

                    </div>
                    {/* Sign in Button */}
                    <button type="submit" className="btn btn-info w-full">Log in</button>
                </form>
                <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                {/* Social icons */}
                <div className="flex justify-center space-x-4">
                    <button onClick={()=>handleSocialLogin(googleSignIn)} type="submit" className="py-2 px-5 mb-4 mt-8 mx-auto w-full block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>
                </div>
                <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Don&apos;t have an account?
                    <Link to='/signUp' className="underline hover:text-indigo-600">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;