import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Video from "./Video";
import Cards from "../spots/Cards";
import Country from "./Country";
import NewsLetter from "./NewsLetter";

const Home = () => {
    const spots = useLoaderData().slice(0, 6);
    return (
        <div className="w-11/12 mx-auto">
            <Slider></Slider>
            <Country></Country>
            <div className=" my-20 text-center">
                <h1 className="text-3xl font-bold">Tourists Spot</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto my-10" data-aos="fade-down" data-aos-delay="50">
                    {
                        spots.map(spot => <Cards key={spot._id} spot={spot}></Cards>)
                    }
                </div>
                <Link className="text-center" to='/allSpots'><button className="btn bg-[#23BE0A] text-white ">View All Tourists Spot</button></Link>
            </div>
            <Video></Video>
            <NewsLetter></NewsLetter>

        </div>
    );
};

export default Home;