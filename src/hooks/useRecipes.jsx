import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"


export default function useRecipes() {
    const axiosPublic = useAxiosPublic()
    const {data:recipes=[],refetch} = useQuery({
        queryKey:['recipes'],
        queryFn:async () =>{
            const res = await axiosPublic.get('/recipe')
            return res.data
        }
    })
    return {recipes,refetch}
}
