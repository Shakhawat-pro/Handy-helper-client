
const NewsLetter = () => {
    return (
        <div className="mt-16">
            <div>
                <h1 className="text-center text-3xl font-bold mb-10">What Customer Say</h1>
            </div>
            <div className="flex gap-20">
                {/* 111111 */}
                <div className="border-2 border-[#23BE0A] p-10 rounded-xl">
                    <div className="flex items-center gap-2 ">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Shakhawat Hossain</h1>
                            <div className="rating rating-md rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" checked />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <p>I stumbled upon this website while planning my vacation, and I am so glad I did! The user-friendly interface made booking a breeze, and the travel tips were invaluable. A trustworthy companion for any globetrotter!</p>
                </div>
                {/* 111111 */}
                <div className="border-2 border-[#23BE0A] p-10 rounded-xl">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Shakhawat Hossain</h1>
                            <div className="rating rating-md rating-half">
                                <input type="radio" name="rating-10" className="rating-hidden" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" checked />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                                <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
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