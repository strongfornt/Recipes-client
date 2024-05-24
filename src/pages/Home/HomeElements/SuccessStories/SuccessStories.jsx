import banner from "./../../../../assets/Success/sucess2.jpg";
import bg from "./../../../../assets/Success/reviewBanner.jpg";
import TopReviewSlider from "./TopReviewSlider";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function SuccessStories() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  return (
    <>
      <section className=" dark:text-gray-800" ref={ref}>
        <div className="container min-w-full flex flex-col relative justify-center  mx-auto  lg:flex-row lg:justify-between">
          <div
            className="flex items-center bg-center bg-cover justify-center absolute -translate-y-24 lg:-translate-y-0 lg:static -z-10   w-full   lg:mt-0 h-96 xl:h-112 2xl:h-128"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="h-full w-full bg-black/45 lg:bg-black/30">
              <div className=" flex  flex-col items-center h-full justify-start lg:justify-center gap-4">
                <div className="max-w-lg flex items-center justify-center  ">
                  <p className="text-white/95 text-sm mt-8 lg:mt-0 text-center">
                    Join a growing community of happy users who are discovering
                    and sharing delicious recipes every day!
                  </p>
                </div>
                <div className="flex space-x-8   items-center justify-center  sm:space-y-0 sm:space-x-10 lg:justify-center">
                  <div
                    data-aos="zoom-in-right"
                    data-aos-delay="900 "
                    data-aos-duration="2000"
                    className="space-y-2"
                  >
                    <p className="text-5xl flex ">
                      {inView && (
                        <CountUp
                          className="text-white"
                          start={5}
                          end={10}
                          duration={5}
                        />
                      )}
                      <span className="text-teal-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-white/85">Total Recipes</p>
                  </div>
                  <div
                    data-aos="zoom-in-up"
                    data-aos-delay="1200 "
                    data-aos-duration="2500"
                    className="space-y-2"
                  >
                    <p className="text-5xl flex ">
                      {inView && (
                        <CountUp className="text-white" end={5} duration={5} />
                      )}
                      <span className="text-teal-400">+</span>{" "}
                    </p>
                    <p className="text-sm text-white/85">Total User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col justify-center h-96 xl:h-112 2xl:h-128     mt-44 lg:mt-0  z-10  text-center rounded-sm  bg-cover bg-center   w-full lg:text-left"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className=" h-full  bg-black/35 ">
              <div className="flex flex-col justify-center items-center  h-full">
                <h1 className="text-4xl text-center md:text-5xl font-bold leading-none text-white mb-6">
                  Our Top Reviews
                </h1>
                <div className=" max-w-xs md:max-w-lg lg:max-w-md">
                  <TopReviewSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
