import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const AddSpots = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target
        const name = e.target.elements.name.value
        const image = e.target.elements.image.value
        const country = e.target.elements.country.value
        const location = e.target.elements.location.value
        const seasonality = e.target.elements.seasonality.value
        const travel = e.target.elements.travel.value
        const cost = e.target.elements.cost.value
        const Visitors = e.target.elements.Visitors.value
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const description = e.target.elements.description.value
        const info ={name, image, country, location, seasonality, travel, cost, Visitors, email, password, description}
        console.log(info);

        // Send data to server
        fetch('http://localhost:5000/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                // toast("Add Successfully!");
                Swal.fire({
                    title: 'success!',
                    text: 'Add Successfully',
                    icon: 'success',
                    confirmButtonText: 'GO Back'
                  }).then(()=>{
                    form.reset();
                  })
                
            }
        })

    };

    return (
        <div className="text-center border-2 border-[#23BE0A] md:w-6/12 mx-auto p-10">
            <div>
                <h2 className="text-4xl mb-10 font-bold text-[#23BE0A]">Add a New Tourists Spot</h2>
            </div>
            <div>
                <form className="space-y-5" onSubmit={handleAddProduct}>
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
                            <select name="country" className="select select-bordered w-full" defaultValue="">
                                <option value="" disabled>Select a Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>


                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">location</span>                    </div>
                            <input type="text" name="location" placeholder="location" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* 4th row */}
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Seasonality</span>                        </div>
                            <input type="text" name="seasonality" placeholder="Like summer, winter" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Travel Time</span>                        </div>
                            <input type="number" name="travel" placeholder="Like- 7 days" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Average Cost</span>                        </div>
                            <input type="number" name="cost" placeholder="Cost" className="input input-bordered w-full " />
                        </label>
                        <label className=" w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Total Visitors PerYear</span>                        </div>
                            <input type="number" name="Visitors" placeholder=" Like- 10000" className="input input-bordered w-full " />
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
                            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="btn w-full text-white bg-[#23BE0A]" />
                </form>
            </div>
        </div>
    );
};

export default AddSpots;
