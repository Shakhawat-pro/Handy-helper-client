
const AddSpots = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="text-center border-2 border-[#23BE0A] md:w-6/12 mx-auto p-10">
            <div>
                <h2 className="text-4xl">Add a New Tourists Spot</h2>
            </div>
            <div>
                <form >
                    {/* 1st line */}
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Tourists Spot Name</span>                        </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Image</span>                        </div>
                            <input type="url" name="image" placeholder="Cost" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* 2nd row */}
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Country Name</span>                    </div>
                            <select name="country" className="select select-bordered w-full">
                                <option disabled selected>Select a Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>

                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">location</span>                    </div>
                            <input type="text" name="location" placeholder="location" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* 3rd row */}
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Tourists Spot Name</span>                        </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Image</span>                        </div>
                            <input type="url" name="image" placeholder="Cost" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* 4th row */}
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Seasonality</span>                        </div>
                            <input type="text" name="seasonality" placeholder="Name" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Travel Time</span>                        </div>
                            <input type="number" name="travel" placeholder="Travel Time" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Average Cost</span>                        </div>
                            <input type="number" name="Cost" placeholder="Cost" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Total Visitors PerYear</span>                        </div>
                            <input type="number" name="Visitors" placeholder="Visitors" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>                        </div>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>                        </div>
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">short description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="description"></textarea>
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="btn w-full text-white bg-[#23BE0A]" />
                </form>
            </div>
        </div>
    );
};

export default AddSpots;
