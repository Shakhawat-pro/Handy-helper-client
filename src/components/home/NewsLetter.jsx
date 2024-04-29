import { useState } from 'react';

const NewsLetter = () => {
    const [rating, setRating] = useState(5); // Initial rating value

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value)); // Update the rating state when the radio button changes
    };

    return (
        <div className="mt-16">
            <div>
                <h1 className="text-center text-3xl font-bold mb-10">What Customers Say</h1>
            </div>
            <div className="flex gap-20">
                {/* Testimonial 1 */}
                <div className="border-2 border-[#23BE0A] p-10 rounded-xl">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full">
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocL17NTTQx1MGgSZj5__r3EQtZ_DvlOdr88FxoVseqr2mAm8m6mV=s96-c" alt="User Avatar" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Shakhawat Hossain</h1>
                            <div className="rating rating-md rating-half">
                                {[...Array(10)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name="rating-1"
                                        value={index + 1}
                                        checked={rating === index + 1} // Check if the rating matches the current radio button value
                                        onChange={handleRatingChange} // Handle radio button changes
                                        className={`bg-green-500 mask mask-star-2 mask-half-${index % 2 === 0 ? '1' : '2'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <p>I stumbled upon this website while planning my vacation, and I am so glad I did! The user-friendly interface made booking a breeze, and the travel tips were invaluable. A trustworthy companion for any globetrotter!</p>
                </div>
                {/* Testimonial 2 */}
                <div className="border-2 border-[#23BE0A] p-10 rounded-xl">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Shakhawat Hossain</h1>
                            <div className="rating rating-md rating-half">
                                {[...Array(10)].map((_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name="rating-2"
                                        value={index + 1}
                                        checked={rating === index + 1} // Check if the rating matches the current radio button value
                                        onChange={handleRatingChange} // Handle radio button changes
                                        className={`bg-green-500 mask mask-star-2 mask-half-${index % 2 === 0 ? '1' : '2'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <p>I stumbled upon this website while planning my vacation, and I am so glad I did! The user-friendly interface made booking a breeze, and the travel tips were invaluable. A trustworthy companion for any globetrotter!</p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
