import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const AllSpot = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true)
    const loadedSpots = useLoaderData()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
            setSpots(loadedSpots) 
            document.title = 'All Tourist Spots'
            window.scrollTo(0, 0);
        }, 500)

        return () => clearTimeout(timeout)

    }, [loadedSpots]);

    const handleLowToHigh = () => {
        const sortedSpots = [...spots].sort((a, b) => a.cost - b.cost);
        setSpots(sortedSpots);
    };

    const handleHighToLow = () => {
        const sortedSpots = [...spots].sort((a, b) => b.cost - a.cost);
        setSpots(sortedSpots);
    };

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div>
                    <div className="text-center mt-16">
                        <h2 data-aos="fade-down" data-aos-delay="50" className="text-4xl font-bold text-[#23BE0A]">Explore Real Estate Listings</h2>
                        <p data-aos="fade-up" data-aos-delay="50" className="mt-4">Discover a wide range of real estate options tailored to your preferences. Filter by property type, sort by price or area, and find your perfect home or investment opportunity with ease.</p>
                    </div>
                    <div data-aos="zoom-out" data-aos-delay="50" className="flex max-md:flex-col  w-11/12 mx-auto border-2 border-[#23BE0A] rounded-2xl bg-gray-100 justify-center items-center gap-20 my-16 p-10">
                        <div data-aos="fade-down" data-aos-delay="100" className="text-center ">
                            <details className="dropdown w-64 ">
                                <summary className="m-1 btn bg-[#23BE0A] text-white w-full">Sort By Price
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 border-2 border-[#23BE0A] rounded-box w-52">
                                    <li><button onClick={handleLowToHigh}>Low to High</button></li>
                                    <li><button onClick={handleHighToLow}>High to Low</button></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto" data-aos="fade-down" data-aos-delay="50">
                        {
                            spots.map(spot => <Cards key={spot._id} spot={spot}></Cards>)
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllSpot;
