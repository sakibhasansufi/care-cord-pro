import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateCamp = () => {
    const updateCamp = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    console.log(updateCamp)
    return (
        <div>
            <h2 className="text-4xl mb-2 ml-60 md:ml-72 lg:ml-80  font-bold">Update Camp Data</h2>

            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >Camp Name <span className="text-red">*</span></label> <br />
                    <input type="text" name="name" placeholder="Camp Name" className="w-auto md:w-[500px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2"  {...register("name", { required: true })} /> <br />
                    {errors.name && <span className="text-red ">This field is required</span>}
                    <br />

                    <label >Upload Camp Image <span className="text-red">*</span></label> <br />
                    <input type="file" name="image" placeholder="Upload Camp Image" className="w-auto md:w-[500px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("image", { required: true })} />
                    <br />
                    {errors.image && <span className="text-red ">This field is required</span>}
                    <br />
                    <div className=" grid-cols-1 md:grid grid-cols-2 gap-[6rem]">
                        <div>
                            <label >Camp Fees</label> <br />
                            <input type="text" name="fees" placeholder="Camp Fees" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("fees")} />
                        </div>

                        <div>
                            <label >Date </label> <br />
                            <input type="date" name="date" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("date")} />
                        </div>

                    </div>


                    <div>
                        <label >Time</label> <br />
                        <input type="text" name="time" placeholder="Time" className="w-auto px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("time")} />
                    </div>


                    <div className=" grid-cols-1 md:grid grid-cols-2 gap-[6rem]">
                        <div>
                            <label >Location</label> <br />
                            <input type="text" name="location" placeholder="Location" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("location")} />
                        </div>

                        <div>
                            <label >Health Care Professional Name</label> <br />
                            <input type="text" name="professionalName" placeholder="Health Care Professional Name" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("professionalName")} />
                        </div>

                    </div>


                    <label >Description of the camp</label> <br />
                    <textarea name="description" id="" placeholder="Description" className="w-auto md:w-[500px] h-[100px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("description")} /> <br />

                    <input type="submit" value="Add Camp" className="btn btn-primary" />
                </form>
            </section>
        </div>
    );
};

export default UpdateCamp;