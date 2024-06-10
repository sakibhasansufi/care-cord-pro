import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddCamp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const campDataItem = {
                name: data.name,
                image: res.data.data.display_url,
                fees: data.fees,
                date: data.date,
                time: data.time,
                location: data.location,
                professionalName: data.professionalName,
                description: data.description

            }

            const campAdd = await axiosSecure.post('/campAdd', campDataItem);
            console.log(campAdd.data)
            if (campAdd.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} camp has been added`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    }

    
    return (
        <div>
            <h2 className="text-4xl mb-2  font-bold">Add Item</h2>
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
                            <input type="date" name="date" className="w-auto md:w-[200px] px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring mt-2 mb-2" {...register("date")}  />
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

export default AddCamp;