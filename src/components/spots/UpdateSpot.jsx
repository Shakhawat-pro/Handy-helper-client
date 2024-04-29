import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateSpot = () => {
    const spot = useLoaderData()
    const {_id, name, image, country, location, seasonality, travel, cost, Visitors, description, email, password } = spot
    const handleUpdate = (e) =>{
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
        const updateSpot ={name, image, country, location, seasonality, travel, cost, Visitors, email, password, description}
        console.log(updateSpot);

                // Send data to server
                fetch(`http://localhost:5000/spot/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateSpot)
                })
                .then(res=> res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount>0){
                        // toast("Add Successfully!");
                        Swal.fire({
                            title: 'success!',
                            text: 'Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'GO Back'
                          }).then(()=>{
                            form.reset();
                          })
                        
                    }
                })
    }
    return (
        <div className="text-center border-2 border-[#23BE0A] md:w-6/12 mx-auto p-10">
        <div>
            <h2 className="text-4xl mb-10 font-bold text-[#23BE0A]">Add a New Tourists Spot</h2>
        </div>
        <div>
            <form className="space-y-5" onSubmit={handleUpdate}>
                {/* 1st line */}
                <div className="flex justify-between">
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Tourists Spot Name</span>                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full " />
                    </label>
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Image</span>                        </div>
                        <input type="url" name="image"  defaultValue={image} placeholder="Cost" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* 2nd row */}
                <div className="flex justify-between">
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Country Name</span>                    </div>
                        <select name="country" defaultValue={country} className="select select-bordered w-full">
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
                        <input type="text" defaultValue={location} name="location" placeholder="location" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* 4th row */}
                <div className="flex justify-between">
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Seasonality</span>                        </div>
                        <input type="text" defaultValue={seasonality} name="seasonality" placeholder="Like summer, winter" className="input input-bordered w-full " />
                    </label>
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Travel Time</span>                        </div>
                        <input type="number" defaultValue={travel} name="travel" placeholder="Like- 7 days" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className="flex justify-between">
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Average Cost</span>                        </div>
                        <input type="number" name="cost" defaultValue={cost} placeholder="Cost" className="input input-bordered w-full " />
                    </label>
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Total Visitors PerYear</span>                        </div>
                        <input type="number" name="Visitors" defaultValue={Visitors} placeholder=" Like- 10000" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className="flex justify-between">
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>                        </div>
                        <input type="email" name="email" defaultValue={email} readOnly placeholder="Email" className="input input-bordered w-full " />
                    </label>
                    <label className=" w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Password</span>                        </div>
                        <input type="password" name="password" defaultValue={password} readOnly placeholder="Password" className="input input-bordered w-full " />
                    </label>
                </div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Short Description</span>
                        </div>
                        <textarea name="description" defaultValue={description}  className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </label>
                </div>
                <input type="submit" value="Update" className="btn w-full text-white bg-[#23BE0A]" />
            </form>
        </div>
    </div>           
    );
};

export default UpdateSpot;