import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { MdKeyboardArrowRight } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { FaRegEye } from "react-icons/fa";
import RelatedRecipes from "./RelatedRecipes";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Spinner from "../../shared/Spineer/Spinner";

export default function RecipesDetails() {
  const { theme } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [recipe,setRecipe] = useState({})
  const [loading,setLoading] = useState(true)
  const [relatedRecipes,setRelatedRecipes] = useState([])

  const {id} = useParams()
  
  useEffect(()=>{
        axiosSecure.get(`/recipe/${id}`)
        .then(res =>{
            setRecipe(res.data)
            setLoading(false)
        })

  },[axiosSecure,id])
  
  const { name, category, country, link, details,watch ,purchasedBy} = recipe || {};

    useEffect(()=>{
        axiosPublic.get(`/recipes/${category}`)
        .then(res => {
            setRelatedRecipes(res.data)
        })
    },[axiosPublic,category])

    if(loading) return <Spinner/>
    
  return (
    <>
      <Helmet>
        <title>RecipeFy | RecipeFyDetails</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-20 pb-6 space-y-1 `}
      >
        <h1
          className={`text-center text-xl  md:text-2xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
          RecipeDetails
        </h1>

        <div className="flex gap-1 justify-center items-center w-fit mx-auto  relative  ">
          <Link to="/">
            <p
              className={` ${
                theme === "light" ? "text-black/45" : "text-white/55"
              }`}
            >
              Homepage
            </p>
          </Link>

          <p
            className={`text-sm ${
              theme === "light" ? "text-black/45" : "text-white/55"
            } flex items-center`}
          >
            {" "}
            <p>
              <MdKeyboardArrowRight />
            </p>{" "}
            Recipes
          </p>
          <p
            className={`text-sm ${
              theme === "light" ? "text-black/75" : ""
            } flex items-center`}
          >
            {" "}
            <p>
              <MdKeyboardArrowRight />
            </p>{" "}
            Recipe-Details
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="1000 "
        data-aos-duration="1000"
        className="px-2 md:px-8  lg:px-8"
      >
        <section className="  ">
          <div className="container flex flex-col-reverse justify-center  my-6 md:my-8  mx-auto  lg:mt-8 lg:mb-16 lg:flex-row-reverse lg:justify-between xl:justify-evenly xl:gap-10 ">
            <div className="flex flex-col justify-center text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <div className="flex items-center gap-4">
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="1200 "
                  data-aos-duration="1200"
                  className={`text-2xl font-bold leading-none sm:text-3xl ${
                    theme === "light" ? "text-[#383737] " : "text-white"
                  }`}
                >
                  {name}
                </h1>
               <div className="mt-2  tooltip" data-tip={watch} >
               <button
                  
                  className={`font-semibold ${theme ==="light" && 'text-[#4b5664]'}`}
                >
                  <FaRegEye /> {" "}
                  
                </button>
               </div>
              </div>

              {/* rent and price */}

              <div className="space-x-4 mt-4 sm:space-x-6 my-2 ">
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="1600 "
                  data-aos-duration="1600"
                  className="px-4 py-1 bg-info rounded-md text-white font-semibold"
                >
                  Category -{" "}
                  <span className="text-sm text-gray-100">{category}</span>
                </button>
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="2000 "
                  data-aos-duration="2000"
                  className="px-4 py-1 bg-teal-500 rounded-md  text-white font-semibold"
                >
                  Country - {country}
                </button>
              </div>
              <div></div>
              <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className="mt-1  text-base text-[#968f8f]   "
              >
                <span
                  className={`text-lg font-semibold ${
                    theme === "light" ? "text-[#383737] " : "text-white"
                  }`}
                >
                  Details
                </span>{" "}
                - {details}
              </p>
              <div className="">
              
              <p
                data-aos="zoom-in-right"
                data-aos-delay="2200 "
                data-aos-duration="2200"
                className=" mb-3 text-base text-[#968f8f] sm:mb-3  "
              >
                <span
                  className={`text-base font-semibold ${
                    theme === "light" ? "text-black/70 " : "text-white"
                  }`}
                >
                  Purchased By
                </span>{" "}
                -    <ul
                    className={`list-disc text-[13px]  font-semibold ${
                      theme === "light" && "text-black/60"
                    } ml-28 mt-1`}
                  >
                    {purchasedBy?.length ? (
                      purchasedBy?.map((buyer, idx) => (
                        <li key={idx}>{buyer }</li>
                      ))
                    ) : (
                     <>
                         <li>....</li>
                         
                         
                      
                     </>
                    )}
                    
                  </ul>
              </p>
            
              </div>
            </div>
            <div className="flex  items-center lg:px-6 xl:px-0   justify-center rounded-xl  mb-5  lg:mt-0 h-80 sm:h-80 lg:h-80 xl:h-112 2xl:h-128">
            
              <iframe
                height="315"
                title={name}
                className=" rounded-xl w-screen lg:w-[50vw] "
                src={link}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="px-2 md:px-8  lg:px-8" >
        <div>
            <h1 className={`text-xl mb-6 font-semibold ${theme === "light" && 'text-[#4b5664]'}`}>Related <span className="text-teal-400">Recipes</span></h1>
        </div>
        <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-4">
            {
                relatedRecipes?.map((recipes,idx) =><RelatedRecipes key={idx} recipes={recipes} />)
            }
        
        </div>
      </div>
    </>
  );
}
