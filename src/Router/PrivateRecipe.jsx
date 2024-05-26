/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
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

     
    return <Navigate to='/' state={location.pathname} replace={true} />

}
