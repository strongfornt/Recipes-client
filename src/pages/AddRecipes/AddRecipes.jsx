

import toast, { Toaster } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

import { Helmet } from "react-helmet-async";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import userAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import axios from "axios";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export default function AddRecipes() {
  const { user, theme,logOut } = useAuth();
  const { displayName, email, photoURL } = user || {};
  const axiosPublic =userAxiosPublic()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageFile = form.image.files[0];
    const category = form.category.value;
    const country = form.country.value;
    const link = form.link.value;
    const details = form.details.value;
    const formData = new FormData()
    formData.append('image',imageFile)
  
    //post image int image bb
    const res = await axiosPublic.post(image_hosting_api,formData)
    //get the success message from image bb===============
    if(res.data?.success){
        const recipes = {
            name,
          image:res.data?.data.display_url,
            category,
            country,
            link,
            details,
            watch:0,
            purchasedBy:[],
          creator: {
            email,
            displayName,
            photo: photoURL,
          },
        };
        
        try{
            const {data} = await axiosPublic.post('/recipes',recipes)
            if (data.insertedId) {
                      toast.success(" Recipe added smoothly!");
                       form.reset();
                      }
        }catch(err){
            console.log(err);
            toast.error("Data upload paused. Retry with stable connection.");
        }


    }
   


  };

  return (
    <>
      <Toaster />
      <Helmet>
        <title>RecipeFy | Add-Recipe</title>
      </Helmet>

      <div
        className={`${
          theme === "light" && "bg-[#F7F7F7]"
        } pt-24 pb-12 space-y-3`}
      >
        <h1
          className={`text-center text-3xl  md:text-4xl font-semibold ${
            theme === "light" && "text-[#4b5664]"
          }`}
        >
          Add Recipe
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
           Add Recipe
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]" > </span>
        </div>
      </div>

      <section className="p-6  ">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-4 "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-base-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <Fade
                direction="up"
                delay={200}
                cascade={false}
                triggerOnce={true}
              >
                <p className="font-medium text-lg text-teal-400 ">
                  <span
                    className={`${
                      theme == "light" ? "text-[#4b5664]" : "text-white"
                    }`}
                  >
                    Add
                  </span>{" "}
                  Recipes{" "}
                </p>
                <p
                  className={`text-xs  ${
                    theme == "light" ? "text-[#4b5664]" : "text-[#d4cccc]"
                  } `}
                >
                 Share your culinary creations with the world! Add your favorite recipes to Recipefy and let others enjoy the flavors you love.
                </p>
              </Fade>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="block text-sm">
                  Recipe Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Recipe name "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="image" className="block text-sm    ">
                  Recipe Image
                </label>
                <input
                  required
                  type="file"
                  name="image"
                  id="image"
                  placeholder="image URL"
                  className="w-full px-3 py-[5px]    border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                />
               
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="category" className="block text-sm">
                  Category
                </label>

                <select
                  required
                  id="category"
                  name="category"
                  defaultValue="default"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300  focus:ring-1 focus:ring-teal-400"
                >
                    <option disabled value="default">
              Select a category
            </option>
            <option value="salad">salad</option>
            <option value="pizza">pizza</option>
            <option value="beef">Beef</option>
            <option value="dessert">Dessert</option>
            <option value="soup">soup</option>
        
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="country" className="block text-sm">
                  Country
                </label>
                <input
                  required
                  type="text"
                  name="country"
                  id="country"
                  
                  placeholder="country"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="link" className="block text-sm">
                  Video Link
                </label>
                <input
                  required
                  type="text"
                  name="link"
                  id="link"
                  
                  placeholder="video Link"
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              
              <div className="col-span-full ">
                <label htmlFor="details" className="block text-sm">
                  Recipe details
                </label>
                <textarea
                  required
                  type="text"
                  name="details"
                  id="details"
                  placeholder="Recipe details "
                  className="w-full px-3 py-2 border outline-none rounded-md bg-transparent border-gray-300 focus:ring-1 focus:ring-teal-400"
                />
              </div>
              <div className="col-span-full md:col-span-2 lg:col-span-1 mt-2    ">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="relative w-full px-5 py-3 overflow-hidden font-bold   border border-gray-200 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-teal-400 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-teal-400  group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400  group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-teal-400  group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-teal-400 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Submit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
         
        </form>
        
      </section>
    </>
  );
}
