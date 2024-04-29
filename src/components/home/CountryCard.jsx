import { useEffect, useState } from "react";
import { useLoaderData, } from "react-router-dom";
import Cards from "../spots/Cards";

const CountryCard = () => {
    const country = useLoaderData();
    const [filteredSpots, setFilteredSpots] = useState([]);
    console.log('cccccccc', country);
    console.log('ffffffff', filteredSpots);
    useEffect(() => {
        fetch('http://localhost:5000/spot')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched spots data:', data);
                // Filter spots based on countyName
                const filtered = data.filter(spot => spot.country === country.name);
                setFilteredSpots(filtered);
            })
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    console.log('Filtered Spots:', filteredSpots);

    return (
        <div>
            <h1 className="text-center text-3xl font-bold mb-14">Total Tourist Spots in {country.name}: <span className="text-[#23BE0A]">{filteredSpots.length}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  w-11/12 mx-auto" data-aos="fade-down" data-aos-delay="50">
                {
                    filteredSpots.map(spot => <Cards key={spot._id} spot={spot}></Cards>)
                }
            </div>
        </div>
    );
};

export default CountryCard;
