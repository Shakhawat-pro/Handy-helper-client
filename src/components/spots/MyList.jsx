import { useLoaderData } from "react-router-dom";
import EditCard from "./EditCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyList = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const loadedSpots = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const filteredSpots = loadedSpots.filter(spot => spot.email === userEmail);
        
        const timeout = setTimeout(() => {
            setLoading(false);
            setSpots(filteredSpots);
            document.title = 'All Tourist Spots';
            window.scrollTo(0, 0);
        }, 500);

        return () => clearTimeout(timeout);
    }, [loadedSpots, userEmail]);

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="w-11/12 mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-extrabold text-[#23BE0A]">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Country</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    spots.map((spot, index) => <EditCard key={spot._id} spot={spot} spots={spots} setSpots={setSpots} index={index + 1}></EditCard>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyList;
