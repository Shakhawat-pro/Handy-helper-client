import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Video from "./Video";
import Cards from "../spots/Cards";
import Country from "./Country";
import NewsLetter from "./NewsLetter";
import { useEffect, useState } from "react";

const Home = () => {
    const initialSpots = useLoaderData();
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpots(initialSpots);
            setLoading(false);
        }, 5000);
    }, [initialSpots]);

    return (
        <div className="w-11/12 mx-auto">
            <Slider />
            <Country />
            <div className="my-20">
                <h1 className="text-3xl font-bold text-center">Tourists Spot</h1>
                {loading ? (
                    <div className="text-center my-8">
                        <span className="loading loading-spinner w-32 text-success"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-11/12 mx-auto my-10" data-aos="fade-down" data-aos-delay="50">
                        {spots.slice(0, 6).map(spot => <Cards key={spot._id} spot={spot} />)}
                    </div>
                )}
                <div className="text-center">
                    <Link to="/allSpots">
                        <button className="btn bg-[#23BE0A] text-white">View All Tourists Spot</button>
                    </Link>
                </div>
            </div>
            <Video />
            <NewsLetter />
        </div>
    );
};

export default Home;
