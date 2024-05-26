import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


export default function useRegistredUser() {
const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
        const {data:singleUser={},isLoading ,refetch} = useQuery({
            queryKey:['singleUser'],
            queryFn:async () =>{
                const res = await axiosPublic.get(`/users/${user?.email}`)
                return res.data
            }
        })
        return {singleUser,isLoading,refetch}
}
