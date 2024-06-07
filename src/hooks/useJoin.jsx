import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useJoin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
   const {refetch,data: joined=[]} = useQuery({
    queryKey : ['joined', user?.email],
    queryFn :async () =>{
        const res = await axiosSecure.get(`/join?email=${user.email}`);
        return res.data;
    }


   })
   return [joined,refetch]
};

export default useJoin;