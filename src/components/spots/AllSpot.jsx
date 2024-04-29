import { useLoaderData } from "react-router-dom";

const AllSpot = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div className="flex flex-col-reverse min-h-[500px] mt-16 ">
            <ToastContainer />

            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto my-16 ">
                <figure className="w-1/2 max-h-[500px] rounded-xl cover  mx-auto" ><img className="object-contain w-full h-full" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <div className="md:flex items-center justify-between">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-[#23BE0A] flex items-center"><FaDollarSign /> {price} <span>{getPriceUnit(id)}</span></h1>
                            <h1 className="text-lg font-semibold flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg> {status}</h1>
                            <h1 className="text-xl font-bold flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>   {location}</h1>
                        </div>
                        <Link to="/contact">

                            <button className='btn max-sm:mt-6  bg-[#23BE0A] text-white'>Contact Us</button>
                        </Link>
                    </div>

                    <div className="divider divider-accent"></div>
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p>{description}</p>
                    <p><span className="font-bold">Type:</span> {type}</p>
                    <p><span className="font-bold">Category:</span> {category}</p>
                    <p><span className="font-bold">Area:</span> {area}</p>
                    <p><span className="font-bold">Facilities:</span> {facilities.join(', ')}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleBooking} className='btn w-full bg-[#23BE0A] text-white'>Book a visit.</button>
                    </div>
                </div>
            </div>
    );
};

export default AllSpot;