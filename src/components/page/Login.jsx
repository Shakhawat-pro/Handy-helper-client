import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="text-center border-2 border-[#23BE0A] md:w-5/12 mx-auto p-10">
                <div>
                    <h2 className="text-4xl mb-5 font-bold text-[#23BE0A]">Sign in to ExploreAsia.</h2>
                    <p>Enter your details below</p>
                    <p className="mt-2">Not a member? <Link to='/register' className="text-[#23BE0A] font-bold underline">Register Now.</Link></p>
                </div>
                <div className="flex justify-center gap-4 md:gap-8 mt-5 mb-10">
                    <button className="btn md:text-lg"><img className="w-3 md:w-6" src="/public/google.png" alt="" /> Login in with Google</button>
                    <button className="btn md:text-lg"><img className="w-3 md:w-6" src="/public/github.png" alt="" /> Login in with Github</button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="space-y-8" >
                        <div className="">
                            <label className=" w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>                        </div>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                            </label>
                            <div className="mt-5">
                            <label className=" w-full max-w-xs m ">
                                <div className="label">
                                    <span className="label-text">Password</span>                        </div>
                                <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                            </label>
                            </div>

                        </div>
                        <input type="submit" value="Login" className="btn w-full text-white bg-[#23BE0A]" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;