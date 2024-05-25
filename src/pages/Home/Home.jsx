import { Helmet } from "react-helmet-async";
import Banner from "./HomeElements/Banner/Banner";
import SuccessStories from "./HomeElements/SuccessStories/SuccessStories";
import { Fade } from "react-awesome-reveal";
import useAuth from "../../hooks/useAuth";
import DeveloperInfo from "./HomeElements/Developer/DeveloperInfo";
import { useLocation, useNavigate } from "react-router-dom";





export default function Home() {
    const {theme,setDropdown,setMenu} = useAuth()
   
  return (
    
    <>
      <Helmet>
        <title>RecipeFy | Home</title>
      </Helmet>
{/* banner section */}
      <div 
        onClick={()=>{
          setMenu(false)
          setDropdown(false)
        }}
      >
      <Banner/>
      </div>
      <div  className="my-16">
      <Fade triggerOnce={true} direction="up" duration={1000} cascade={false} >
      <h1 className=" mb-3 text-2xl font-semibold text-center   text-teal-400 ">
      Success Stories
        </h1>
        <p
          className={`text-sm text-center mb-8 max-w-screen-sm mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
            Discover why lot's of users love Recipefy! Explore the success stories of our vibrant community, see how many recipes have been shared, and how our platform has grown over time.

        </p>
      </Fade>
        <SuccessStories/>
      </div>

      {/* developer info================================ */}
      <div className="my-16">
    
          <div className="  mb-6 md:mb-8" >
          <Fade triggerOnce={true} direction="up" duration={1000} cascade={false} >
      <h1 className={` relative text-center text-3xl font-semibold ${theme === "light" && 'text-[#4b5664]'} `}>
      Meet the <span className="text-teal-400">Developer</span>
       
        </h1>
       
      </Fade>
  <div className="flex items-center justify-center">
  <span className={`inline-flex w-32  absolute ${theme ==="light"? 'bg-teal-400':'bg-white/80'} translate-y-4 h-[1.5px]`} > </span>
  </div>
          </div>
        <DeveloperInfo/>
      </div>
    </>
  )
}
