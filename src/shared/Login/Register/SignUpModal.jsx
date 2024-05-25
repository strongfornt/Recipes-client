
import useAuth from "../../../hooks/useAuth";

import { IoMdClose } from "react-icons/io";
import SocialLogin from "../SocialLogin";

export default function SignUpModal() {
  const {  setSignInModal, setSignUpModal} =
    useAuth();
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //     .then(() => {
  //       toast.success("Account created! Welcome!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Registration error. Check connection.");
  //     });
  // };
  
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
                        
                        setSignUpModal(false);
                      }}
                    ><IoMdClose className="text-2xl text-white" /></button>
                </div>
                <div className="w-full max-w-md p-4 rounded-md    left-50 sm:p-8  ">
                  <h2 className="mb-3 text-2xl  md:text-3xl font-semibold text-center   text-teal-400">
                    Register{" "}
                    <span
                      className={`text-white `}
                    >
                      here
                    </span>
                  </h2>
                  <p
                    className={`px-6  text-sm text-center text-white/70`}
                  >
                    Already have an account?
                    <span
                      onClick={() => {
                        setSignUpModal(false);
                        setSignInModal(true);
                      }}
                      className="hover:underline cursor-pointer  dark:text-teal-400"
                    >
                      Login
                    </span>
                  </p>

                  <div className="my-6 space-y-4">
                    {/* <button
                      onClick={() => {
                        handleGoogleLogin();
                        setSignUpModal(false);
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
                      <p className="text-white/70" >Register with Google</p>
                    </button> */}
                    <SocialLogin title='Register' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
