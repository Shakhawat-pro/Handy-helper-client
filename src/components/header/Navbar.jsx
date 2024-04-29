import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext, useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }



    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("black")
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])

    const navLinks = <>
        <li data-aos="fade-up" data-aos-delay="50" className=""><NavLink to="/">Home</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="100" className=""><NavLink to="/allSpots">All Tourists Spot</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="100" className=""><NavLink to="/addSpots">Add Tourist Spots</NavLink></li>
        <li data-aos="fade-up" data-aos-delay="200" className=""><NavLink to="/MyList">My List</NavLink></li>
    </>

    return (
        <div className="mb-10 md:w-11/12 md:mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className={`btn btn-ghost p-0 text-xl md:text-3xl font-bold ${theme === "light" ? "text-black" : "text-white"} glow`}>
                        <Typewriter
                            words={['Explore Asia']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={2000}
                        />
                    </a>                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu-horizontal  px-1 space-x-5 ${theme === "light" ? "text-black" : "text-white"}`}>
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-2 flex ">
                    <div>
                        <label className="swap swap-rotate pt-1">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onChange={handleToggle} className="theme-controller" value="" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-6 h-6 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-6 h-6 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                    {
                        user ? <>
                            <div className="flex items-center space-x-2 md:space-x-6">
                                <div>
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="btn btn-ghost  w-10 h-14 md:w-14 rounded-full p-0 ring ring-[#23BE0A] ring-offset-base-100 ring-offset-2"><img className="rounded-full" src={user.photoURL} alt="" /></div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-2 border-[#23BE0A] rounded-box w-52 right-1">
                                            <li><a className={`${theme === "light" ? "text-black" : "text-white"} font-bold text-xl`}>{user.displayName}</a></li>
                                            <li><Link to="/"><button className="btn bg-[#23BE0A] text-white max-sm:w-16 rounded-lg" onClick={handleLogOut}>Log Out</button></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </> :
                            <div>
                                <Link to="/login"><button className="btn bg-[#23BE0A] text-white w-16 md:w-20 rounded-lg">Login</button></Link>
                                <Link to="/register"><button className="btn bg-[#3dd6e0] text-white w-16 md:w-20 rounded-lg">Register</button></Link>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;