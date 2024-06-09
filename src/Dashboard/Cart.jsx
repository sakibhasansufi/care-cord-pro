import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { LuUserCheck2 } from "react-icons/lu";
import toast from "react-hot-toast";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch ();
                    toast.success(`${user.name} is an admin`)
                }
            })
    }
    return (
        <div className="mr-8 ">
            
            <section className="hidden">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>

                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.role === 'admin' ? 'Organizer' : <button  
                                     className="flex items-center" onClick={() => handleAdmin(user)}>
                                        make as admin <LuUserCheck2 className="text-2xl m-8" />
                                    </button>}</td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>


            </section>


        </div>
    );
};

export default Cart;