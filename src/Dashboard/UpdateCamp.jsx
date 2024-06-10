import { useLoaderData } from "react-router-dom";

const UpdateCamp = () => {
    const updateCamp = useLoaderData();
    console.log(updateCamp)
    return (
        <div>
           <h2 className="text-4xl mb-2 ml-60 md:ml-72 lg:ml-80  font-bold">Update Camp Data</h2> 
        </div>
    );
};

export default UpdateCamp;