/* eslint-disable react/prop-types */
import {
   
    GoogleAuthProvider,
    
    onAuthStateChanged,
    
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";


import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

  
  
  
  export const AuthContext = createContext(null);
  
  export default function ContextProvider({ children }) {
   const axiosPublic = useAxiosPublic()
  
    const googleProvider = new GoogleAuthProvider();
  
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const [theme,setTheme] = useState("light")
    const [menu, setMenu] = useState(false);
    const [dropdown,setDropdown] = useState(false)
    const [signInModal, setSignInModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [userRefetch,setUserRefetch] = useState(false)
    
    
 
    const updateUserProfile = (user, update) => {
      return updateProfile(user, update);
      
    };
    const googleLogin =()=>{
    return  signInWithPopup(auth,googleProvider)
    }
  
   
    const logOut =()=>{
      return signOut(auth)
    }
    
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email: userEmail}
        if (currentUser) {
          setUser(currentUser);
          setLoading(false)
          //if user exist then issue a token ===============================
          axiosPublic.post("/jwt", loggedUser).then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          });
        
        } else {
          localStorage.removeItem("access-token");
          setUser(null);
          setLoading(false)
         
        }
      });
  
      return () => {
        unSubscribe();
      };
    }, [user?.email]);
  
    const authInfo = {
      user,
      updateUserProfile,
      googleLogin,
      logOut,
      loading,
      setUser,
      setLoading,
      theme,
      setTheme,
      menu,
      setMenu,
      dropdown,
      setDropdown,
      signInModal,
      setSignInModal,
      signUpModal,
      setSignUpModal,
      userRefetch,
      setUserRefetch
     
    };
    return (
      <>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      </>
    );
  }