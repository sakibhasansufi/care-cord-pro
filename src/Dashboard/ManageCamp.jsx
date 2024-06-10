import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ManageCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { data: campAdd = [], refetch } = useQuery({
        queryKey: ['campAdd'],
        queryFn: async () => {
            const res = await axiosSecure.get('/campAdd');
            return res.data;
        }

    })


    const handleDeleteCamp = (camps) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/campAdd/${camps._id}`);
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${camps.name}has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    };







    return (
        <section>
            <h2 className="text-4xl mb-2 ml-60 md:ml-72 lg:ml-80  font-bold">Manage Camps</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Camp Name</th>
                            <th>Date(Year,Month,Date)</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Health Care Professional Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            campAdd.map((camps, index) => <tr key={camps._id} className="hover font-roboto">
                                <th>{index + 1}</th>
                                <td>{camps.name}</td>
                                <td>{camps.date}</td>
                                <td>{camps.time}</td>
                                <td>{camps.location}</td>
                                <td>{camps.professionalName}</td>


                                <td>
                                    <Link to={`/dashboard/campAdd/${camps._id}`}>
                                        <button>
                                            <FiEdit className="text-green text-xl mr-5" />
                                        </button>
                                    </Link>

                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteCamp(camps)}
                                    >
                                        <RiDeleteBinLine className="text-red text-xl" />

                                    </button>
                                </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </section >
    );
};

export default ManageCamp;