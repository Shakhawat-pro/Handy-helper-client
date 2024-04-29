import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import Lottie from "lottie-react";
import RegisterPage from '../../../public/RegisterPage.json'

const Register = () => {
    const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    useEffect(() => {
        document.title = 'Register'
    })


    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoUrl = e.target.url.value
        console.log('register', email, password, name, photoUrl);
        setRegisterError('')
        setSuccess('')
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter, one lowercase letter,at last 6 characters long.');
            return;
        }
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                console.log(result.user);
                toast("User Created Successfully. Please go to Login page!")
                setSuccess('User Created Successfully.')
            }
            )
            .catch(error => {
                setRegisterError(error.message)
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
                setRegisterError(error.message)
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
                setRegisterError(error.message)
            })
    }
    return (
        <div className="flex flex-col md:flex-row">
            <div className='md:w-1/2'>
                <Lottie animationData={RegisterPage} loop={true} ></Lottie>
            </div>
            <div className="text-center border-2 border-[#23BE0A] md:w-5/12 mx-auto p-10">
                <div>
                    <ToastContainer />
                    <h2 className="text-4xl mb-5 font-bold text-[#23BE0A]">Im New Here.</h2>
                    <p>Enter your details below</p>
                    <p className="mt-2">Already a member? <Link to='/login' className="text-[#23BE0A] font-bold underline">Login Now.</Link></p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8 mt-5 mb-10">
                    <button onClick={handleGoogleSignIn} className="btn text-lg"><img className="w-6" src="/google.png" alt="" /> Sign in with Google</button>
                    <button onClick={handleGithubSignIn} className="btn text-lg"><img className="w-6" src="/github.png" alt="" /> Sign in with Github</button>
                </div>
                <div className="divider">OR</div>
                <div>
                    <form className="space-y-8" onSubmit={handleRegister} >
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
                                    <input type="url" name="url" placeholder="Photo url" className="input input-bordered w-full " />
                                </label>
                            </div>
                            <div>
                                <label className=" w-full max-w-xs ">
                                    <div className="label">
                                        <span className="label-text">Email</span>                        </div>
                                    <input type='email' name="email" placeholder="Email" className="input input-bordered w-full " />
                                </label>
                            </div>
                            <div className="">
                                <label className=" w-full max-w-xs relative ">
                                    <div className="label">
                                        <span className="label-text">Password</span>                        </div>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full " />
                                    <span className="absolute ml-2 top-1/2 right-4 translate-y-4" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
                                </label>
                            </div>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-500">{success}</p>
                        }
                        <input type="submit" value="Register" className="btn w-full text-white bg-[#23BE0A]" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;