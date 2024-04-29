import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import LoginPage from '../../../public/LoginPage.json'



const Login = () => {
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        document.title = 'Login'
    })

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('login', email, password);


        // error reset
        setLoginError('')
        setSuccess('')

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast("Login Successfully")
                setSuccess('Login Successfully')
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast("Google Login Successfully")
                setSuccess('Login Successfully')

            })
            .catch(error => {
                setLoginError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
                toast("Github Login Successfully")
                setSuccess('Login Successfully')


            })
            .catch(error => {
                setLoginError(error.message)
            })
    }
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
                <Lottie  animationData={LoginPage} loop={true} ></Lottie>
            </div>
            <div className="text-center border-2 border-[#23BE0A] md:w-5/12 mx-auto p-10">
                <div>
                    <ToastContainer />
                    <h2 className="text-4xl mb-5 font-bold text-[#23BE0A]">Login in to ExploreAsia.</h2>
                    <p>Enter your details below</p>
                    <p className="mt-2">Not a member? <Link to='/register' className="text-[#23BE0A] font-bold underline">Register Now.</Link></p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8 mt-5 mb-10">
                    <button onClick={handleGoogleSignIn} className="btn md:text-lg"><img className="w-3 md:w-6" src="/google.png" alt="" /> Login in with Google</button>
                    <button onClick={handleGithubSignIn} className="btn md:text-lg"><img className="w-3 md:w-6" src="/github.png" alt="" /> Login in with Github</button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="space-y-8" onSubmit={handleLogin}>
                        <div className="">
                            <label className=" w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>                        </div>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                            </label>
                            <div className="mt-5">
                                <label className=" w-full max-w-xs m relative">
                                    <div className="label">
                                        <span className="label-text">Password</span>                        </div>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full " />
                                    <span className="absolute ml-2 top-1/2 right-4 translate-y-4" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                                </label>
                            </div>
                        </div>
                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }
                        {
                            success && <p className="text-green-500">{success}</p>
                        }
                        <input type="submit" value="Login" className="btn w-full text-white bg-[#23BE0A]" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;