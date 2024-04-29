import { useLoaderData } from "react-router-dom";
import EditCard from "./EditCard";

const MyList = () => {
    const spots = useLoaderData()

    return (
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
                            spots.map((spot, index) => <EditCard key={spot._id} spot={spot} index={index+1}></EditCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;