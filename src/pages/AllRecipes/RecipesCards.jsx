import {  useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function RecipesCards({ data: recipe }) {
  const { theme } = useAuth();
  const navigate = useNavigate()

  const { name, country, creator, purchasedBy,image,_id } = recipe || {};
    
  return (
    <>
      <section
        className={`shadow-md px-2  md:px-6 container max-w-screen-xl mx-auto ${
          theme !== "light"
            ? "border rounded-md border-white/50"
            : "border-t border-gray-300/90"
        }`}
      >
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:mr-2 lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1
                  className={`text-3xl font-semibold  lg:text-4xl  ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  {name}{" "}
                </h1>

                <div className="flex mt-2 flex-col-reverse ">
                  <h2
                    className={`${
                      theme === "light" && "text-[#4b5664]"
                    } text-base `}
                  >
                    <span className="font-bold">Country:</span> {country}
                  </h2>

                  <h2
                    className={`${
                      theme === "light" && "text-[#4b5664]"
                    } text-base  `}
                  >
                    <span className="font-bold">Creator Mail:</span>{" "}
                    {creator?.email}
                  </h2>
                </div>
                {/* <div>
                  <h2
                    className={`${
                      theme === "light" && "text-[#4b5664]"
                    } text-base font-bold `}
                  >
                    Purchased by:
                  </h2>
                  <ul
                    className={`list-disc text-xs font-semibold ${
                      theme === "light" && "text-black/80"
                    } ml-5 mt-1`}
                  >
                    {purchasedBy?.length ? (
                      purchasedBy?.map((buyer, idx) => (
                        <li key={idx}>{buyer || "..."}</li>
                      ))
                    ) : (
                      <li>....</li>
                    )}
                    
                  </ul>
                </div> */}
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
                    } ml-28 `}
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

                <button onClick={()=>navigate(`/recipeDetails/${_id}`)}  className="w-full px-5 py-2 mt-6 text-sm tracking-wider font-bold text-white uppercase transition-colors duration-300 transform bg-teal-600 rounded-lg lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-500">
                  View The Recipe
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full  rounded-md h-72  md:h-80 lg:max-w-3xl"
                src={image}
                alt={name}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
