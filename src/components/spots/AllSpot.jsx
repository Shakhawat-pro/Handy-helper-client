import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";



const AllSpot = () => {
    const spots = useLoaderData()
    console.log(spots);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto" data-aos="fade-down" data-aos-delay="50">
            {
                spots.map(spot => <Cards key={spot._id} spot={spot}></Cards>)
            }
        </div>
    );
};

export default AllSpot;