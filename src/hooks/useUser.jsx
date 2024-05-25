import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export default function useUser() {

    const axiosPublic = useAxiosPublic()
        const {data:user=[],refetch} = useQuery({
            queryKey:['user'],
            queryFn:async () =>{
                const res = await axiosPublic.get('/users')
                return res.data
            }
        })
        return {user,refetch}
}
