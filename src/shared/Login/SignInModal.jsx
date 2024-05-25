
import useAuth from "../../hooks/useAuth";


import { IoMdClose } from "react-icons/io";
import SocialLogin from "./SocialLogin";


export default function SignInModal() {
    const {setSignInModal,setSignUpModal} = useAuth()
    // const handleGoogleLogin = () => {
    //     googleLogin()
    //       .then(() => {
    //         toast.success("You're in! Welcome back!");
    //       })
    //       .catch(() => {
    //         toast.error("Sign-in error. Check connection.");
    //       });
    //   };
    
  return (
    <>

       
      <div className="relative flex justify-center">
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-gray-900   rounded-lg shadow-xl rtl:text-right  sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="flex justify-end">
                    <button 
                     onClick={() => {
                        
                       setSignInModal(false);
                      }}
                    ><IoMdClose className="text-2xl text-white" /></button>
                </div>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  ">
        <h2 className="mb-3 text-2xl  md:text-3xl font-semibold text-center   text-teal-400">
          Login <span
            className={`text-white `}
          >
           now!
          </span>
        </h2>
        <p className="text-sm text-center text-white/70 ">
          Dont have account?
          <span
            onClick={() =>{
                setSignInModal(false)
                setSignUpModal(true)
            }}
            
            className="focus:underline hover:underline cursor-pointer text-teal-400"
          >
            Register here
          </span>
        </p>

        <div className="my-6 space-y-4">
          {/* <button
          
            onClick={()=>{
                handleGoogleLogin()
                setSignInModal(false)
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
            <p className="text-white/70" >Login with Google</p>
          </button> */}
          <SocialLogin title='Login'/>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
