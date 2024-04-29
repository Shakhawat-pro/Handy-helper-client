/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="text-center border-2 border-[#23BE0A] md:w-5/12 mx-auto p-10">
                <div>
                    <h2 className="text-4xl mb-5 font-bold text-[#23BE0A]">I'm New Here.</h2>
                    <p>Enter your details below</p>
                    <p className="mt-2">Already a member? <Link to='/login' className="text-[#23BE0A] font-bold underline">Login Now.</Link></p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-5 mb-10">
                    <button className="btn text-lg"><img className="w-6" src="/public/google.png" alt="" /> Sign in with Google</button>
                    <button className="btn text-lg"><img className="w-6" src="/public/github.png" alt="" /> Sign in with Github</button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="space-y-8" >
                        <div className="space-y-5">
                            <div>
                                <label className=" w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Name</span>                        </div>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                                </label>
                            </div>
                            <div>
                                <label className=" w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Photo url</span>                        </div>
                                    <input type="url" name="photo" placeholder="Photo url" className="input input-bordered w-full " />
                                </label>
                            </div>
                            <div>
                                <label className=" w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Email</span>                        </div>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                                </label>
                            </div>
                            <div className="">
                                <label className=" w-full max-w-xs m ">
                                    <div className="label">
                                        <span className="label-text">Password</span>                        </div>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                                </label>
                            </div>

                        </div>
                        <input type="submit" value="Register" className="btn w-full text-white bg-[#23BE0A]" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;