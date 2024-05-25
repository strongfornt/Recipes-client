/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc"
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";



export default function SocialLogin({title}) {
    const {setSignInModal,setSignUpModal,googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()
   
    const handleGoogleLogin = () => {
        googleLogin()
          .then((res) => {
            toast.success("Welcome to Recipefy! ");
            // const res = await axiosPublic.post('/users',)
            const userInfo = {
            email:res.user?.email ,
            name:res.user?.displayName ,
            image:res.user?.photoURL,
            coin:50
          }
          console.log(userInfo);
          //save user into database ============================================== 
          const savedUser = async() => {
            try{
              const res = await axiosPublic.post('/users',userInfo)
              console.log(res.data);
            }
           catch(err){
            console.log(err)
           }

          }
          savedUser();
          //save user into database end ============================================== 
          })
          .catch(() => {
            toast.error("An error occurred. Please try again.");
          });
      };
  return (
    <>
     <button
          
          onClick={()=>{
              handleGoogleLogin()
              setSignInModal(false)
              setSignUpModal(false)
          }}
          data-aos="zoom-in"
          data-aos-delay="500 "
          data-aos-duration="1000"
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4  border border-teal-300 rounded-md  
            hover:bg-accent/5 hover:border-teal-400/70  duration-300"
        >
          <FcGoogle className="text-2xl" />
          <p className="text-white/70" >{title} with Google</p>
        </button>
    </>
  )
}
