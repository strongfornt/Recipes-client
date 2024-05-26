import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../shared/Spineer/Spinner";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import RecipesCards from "./RecipesCards";


export default function Recipes() {
  const { theme } = useAuth();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [country,setCountry] = useState("")
  const [recipe,setRecipe] = useState("")
  
  
//   const [refetch, setRefetch] = useState(false);
  const axiosPublic = useAxiosPublic();

  //data fetch hook===============================================
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosPublic.get(
        `/recipes?category=${category}&country=${country}&recipe=${recipe}`
      );
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, [ category,axiosPublic,country,recipe]);


  return (
    <>
      <Helmet>
        <title>RecipeFy | Recipes</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-24 pb-12 space-y-3 `}
      >
        <h1
          className={`text-center text-3xl  md:text-4xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
         All Recipes
        </h1>

        <div className="flex gap-1 justify-center items-center w-fit mx-auto  relative  ">
          <Link to="/">
            <p className={`${theme === "light" ? "text-black/65" : ""}`}>
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
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto ">
        {/* search functionality start here==================== */}
      <div className="container px-2 w-fit mx-auto  flex items-center justify-center  gap-4 md:gap-8  lg:gap-10  py-5">
        {/* search by country start ============================ */}
      <div className="" >
      <fieldset className="w-full space-y-1 dark:text-gray-800">
	<label htmlFor="Search" className="hidden">Search</label>
	<form onSubmit={(e)=>{
        e.preventDefault()
        setCategory("")
        setRecipe("")
        setCountry(e.target.country.value);
        e.target.reset()
    }} className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="submit" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="country" placeholder="Filter By Country" className="py-[5px] pl-10 text-sm   focus:outline-none border cursor-pointer ring-1 ring-teal-400 outline-none rounded-md" />
	</form>
</fieldset>
      </div>
       {/* search by country end ============================ */} 
       {/* search by category start ============================ */} 
        <select
          onChange={(e) => {
            setCountry("")
            setRecipe("")
            setCategory(e.target.value);
            
          }}
        
          defaultValue="default"
          className="px-4 py-1  border cursor-pointer ring-1 ring-teal-400 outline-none rounded-md "
          name="category"
          id="category"
        >
          <option disabled value="default"  >Filter By Category</option>
          <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="beef">Beef</option>
            <option value="dessert">Dessert</option>
            <option value="soup">Soup</option>
        </select>
         {/* search by category end ============================ */} 
         {/* search by name start ============================ */} 
         <div className="" >
      <fieldset className="w-full space-y-1 dark:text-gray-800">
	<label htmlFor="Search" className="hidden">Search</label>
	<form onSubmit={(e)=>{
        e.preventDefault();
        setCategory("");
        setCountry("")
        setRecipe(e.target.recipe.value)
        e.target.reset()
        
    }} className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="submit" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="recipe" placeholder="Search by recipe name" className="py-[5px] pl-10 text-sm  focus:outline-none border cursor-pointer ring-1 ring-teal-400 outline-none rounded-md" />
	</form>
</fieldset>
      </div>
         {/* search by name end ============================ */} 
       <div className="" >
       <button
          onClick={() => {
            setCategory("")
            setCountry("")
            setRecipe("")
          }}
          className="px-4 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 duration-300 font-medium"
        >
          Reset
        </button>
       </div>
      </div>
      {/* search functionality end here ============================ */}
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <section className="grid grid-cols-1 px-2 gap-6 xl:gap-4 my-10">
            {data?.map((data, idx) => (
              <RecipesCards
                
                key={idx}
                data={data}
              />
            ))}
          </section>{" "}
        </>
      )}
    
    </>
  );
}
