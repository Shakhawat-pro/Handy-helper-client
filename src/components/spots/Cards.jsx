import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Cards = ({ spot }) => {
    const {_id, name, image, country, location, seasonality, travel, cost, Visitors, description } = spot
    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/solosSpot/${_id}`)
    }
    return (
        <div className="flex justify-center">
            <div className="max-w-sm w-full">
                <div className="card h-full hover:cursor-pointer bg-base-100 shadow-xl p-6 border-2 border-[#23BE0A] rounded-xl">
                    <figure data-aos="zoom-in" data-aos-duration="1000">
                        <img src={image} alt="Shoes" className="rounded-lg h-[280px] " />
                    </figure>
                    <div className="">
                        <h1 data-aos="fade-up" data-aos-delay="50" className="card-title text-2xl font-bold my-3">{name}</h1>
                        <p data-aos="fade-up" data-aos-delay="60" className='font-semibold flex gap-2 text-[#23BE0A] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                            </svg>
                            {country}</p>
                        <div data-aos="fade-up" data-aos-delay="70" className="flex gap-4 mt-2">
                            <p className="flex gap-1"><span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>{location}</p>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="80" className='my-3'>{description}</p>
                        <div data-aos="fade-up" data-aos-delay="90" className='mt-2'>
                            <p className='text-lg font-semibold'>Travel Time:<span className='text-[#23BE0A]'> {travel} Days</span></p>
                            <p className='text-lg font-semibold'>Beast Travel Season:<span className='text-[#23BE0A]'> {seasonality} </span></p>
                            <p className='text-lg font-semibold flex gap-1'>Visitor Per Year:<span className='text-[#23BE0A] flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                                {Visitors}</span></p>
                            <p className='text-lg font-semibold'>Average Cost:<span className='text-[#23BE0A]'> {cost} BDT</span></p>
                        </div>
                        <hr style={{ borderBottom: "1px dotted #888", height: "1px" }} className='mt-7 mb-3' />
                        <div data-aos="fade-up" data-aos-delay="80" className=' '>
                            <button onClick={handleClick} className='btn w-full bg-[#23BE0A] text-white'>View Property</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cards;
Cards.propTypes = {
    spot: PropTypes.object
}