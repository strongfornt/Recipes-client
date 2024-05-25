/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Spinner from "../shared/Spineer/Spinner";




export default function PrivateRoutes({children}) {
    const {user,loading} = useAuth()
    const location = useLocation()
    

    if(loading){
        return <Spinner/>
    }

    if(user){
        return children;
    }

     toast.error('Access denied. Please log in first.')
    return <Navigate to='/' state={location.pathname} replace={true} />
//    if(!user){
//    
//    }
}
