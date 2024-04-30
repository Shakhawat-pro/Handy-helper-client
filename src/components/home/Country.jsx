import { useEffect, useState } from "react";
import SoloCountry from "./SoloCountry";
import { Typewriter } from 'react-simple-typewriter';

const Country = () => {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://explore-asia-sever.vercel.app/country')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setCountries(data);
                    setLoading(false);
                }, 7000);
            })
            .catch(error => {
                console.error('Error fetching content:', error);
                console.error('Error message:', error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-[#23BE0A]">
                    Find Your Dream Country
                    <Typewriter
                        words={[' Bangladesh', " Maldive", " Thailand", " Malaysia", " Vietnam", " Cambodia"]}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p>You like peaceful destination or vibrant landscape we have offer for you.</p>
            </div>
            {loading ? (
                <div className="text-center my-8">
                    <span className="loading loading-spinner w-32 text-success"></span>
                </div>
            ) : (
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-11/12 mx-auto">
                    {
                           countries.map(country => <SoloCountry key={country._id} country={country} />)
                    }
                </div>
            )}
        </div>
    );
};

export default Country;
