
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useCampAdd = () => {
    const axiosPublic = useAxiosPublic();
    const {data : campAdd =[],isPending : loading,refetch} = useQuery({
        queryKey : ['campAdd'],
        queryFn : async() =>{
            const res = await axiosPublic.get('/campAdd');
            return res.data;
        }

    })
    return [campAdd,loading,refetch]
};

export default useCampAdd;