import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
import "./styles.css";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Banner() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#2DD4BF",
          "--swiper-navigation-size": "35px", // Adjust navigation size
        }}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        }}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className=" w-full"
      >
        <SwiperSlide className="">
          <div className=" slide slide1  h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/45   h-full flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  triggerOnce={true}
                  cascade={false}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                    Savor the
                    <span className="text-teal-500"> Flavor</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center px-2 ">
                    Dive into our collection of mouthwatering recipes that are
                    sure to delight your taste buds.
                  </p>
                </Fade>
                <div className="flex items-center justify-center gap-10">
                  <Link
                    to="/recipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      See Recipes
                    </span>
                  </Link>
                  <Link
                    to="/addRecipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      Add Recipes
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2   h-[100vh] md:h-[94vh]        ">
            <div className="w-full bg-black/55   h-full flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  cascade={false}
                  triggerOnce={true}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                    Recipe
                    <span className="text-teal-500"> Treasures</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                    Unlock a treasure trove of recipes that will inspire your
                    cooking and satisfy your palate.
                  </p>
                </Fade>
                <div className="flex items-center justify-center gap-10">
                  <Link
                    to="/recipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      See Recipes
                    </span>
                  </Link>
                  <Link
                    to="/addRecipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      Add Recipes
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3    h-[100vh]  md:h-[94vh]    ">
            <div className="w-full bg-black/55   h-full flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  cascade={false}
                  triggerOnce={true}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                    Savory
                    <span className="text-teal-500"> Secrets</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                    Reveal the secrets to delicious meals with our expertly
                    crafted recipes. Cook, taste, and enjoy.
                  </p>
                </Fade>
                <div className="flex items-center justify-center gap-10">
                  <Link
                    to="/recipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      See Recipes
                    </span>
                  </Link>
                  <Link
                    to="/addRecipes"
                    className="relative inline-flex items-center justify-start px-3 py-2 overflow-hidden  border border-teal-600 font-medium transition-all bg-transparent rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-teal-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white    transition-colors duration-300 ease-in-out group-hover:text-white">
                      Add Recipes
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
