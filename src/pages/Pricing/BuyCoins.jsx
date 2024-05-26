import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

export default function BuyCoins() {
    const {theme} = useAuth()
  return (
    <>
        <Helmet>
        <title>RecipeFy | Pricing</title>
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
        Purchase Coins
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
            Purchase Coins
          </p>
          <span className="inline-flex w-full absolute bg-[#F7F7F7] translate-y-6 h-[1px]">
            {" "}
          </span>
        </div>
      </div>
      {/* main content start from here================ */}
      <section className=" " >
      <section className="">
	<div className="container mx-auto p-4 mb-8">
		<div className="mb-16 space-y-4 text-center">
			
            <Fade triggerOnce={true} direction="up" duration={1000} cascade={false} >
            <h1 className={` text-2xl md:text-3xl font-semibold leading-tight ${theme === "light" && 'text-[#4b5664]'}`}>Pricing <span className="text-teal-400" >Plan</span></h1>
        <p
          className={`text-sm text-center mb-8 max-w-screen-sm mx-auto ${
            theme === "light" ? "text-[#4b5664]" : "text-white"
          }`}
        >
            Choose the perfect coin package that fits your culinary needs and budget. Unlock premium recipes and features to enhance your cooking experience.

        </p>
      </Fade>
		
		</div>
		<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
			<div className="relative z-0 flex flex-col items-center p-8 border-teal-400 border rounded-md">
				<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-teal-600 dark:text-gray-50">Basic</span>
				<p className="flex items-center justify-center mt-4 space-x-2 font-bold">
					<span className={`text-lg line-through ${theme === "light" && 'dark:text-gray-700'}`}>&nbsp;3$&nbsp;</span>
					<span className="pb-2 text-4xl">1$</span>
					<span className="text-lg">/</span>
				</p>
				<ul className="flex-1 ">
					<li className="flex items-center space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-teal-600">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
						</svg>
						<span>100 coins to unlock recipes</span>
					</li>
					
				</ul>
                <p>Perfect for casual cooks who want to explore new recipes</p>
				<button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-4 sm:py-3 sm:px-8 dark:border-teal-600">Start Now</button>
			</div>
			<div className={`relative flex flex-col items-center p-8 border-2 rounded-md dark:border-teal-600 ${theme === "light" && 'bg-gray-100'}`}>
				<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-teal-600 dark:text-gray-50">Premium</span>
				<p className="flex items-center justify-center mt-4 space-x-2 font-bold">
                <span className={`text-lg line-through ${theme === "light" && 'dark:text-gray-700'}`}>&nbsp;12$&nbsp;</span>
					<span className="pb-2 text-4xl">10$</span>
					<span className="text-lg">/</span>
				</p>
				<ul className="flex-1 space-y-2">
					<li className="flex items-center space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-teal-600">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
						</svg>
						<span>1000 coins to unlock recipes</span>
					</li>
					
				</ul>
                <p>For serious food enthusiasts who want it all.</p>
				<button className="px-8 py-3 mt-7  text-lg font-semibold uppercase rounded dark:bg-teal-600 dark:text-gray-50">Start Now</button>
			</div>
			<div className={`relative z-0 flex flex-col items-center p-8 border rounded-md ${theme === "light" ? 'dark:bg-gray-100' :'border border-teal-400'}`}>
				<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-teal-600 dark:text-gray-50">Popular</span>
				<p className="flex items-center justify-center mt-4 space-x-2 font-bold">
					<span className="text-lg line-through dark:text-gray-700">&nbsp;7$&nbsp;</span>
					<span className="pb-2 text-4xl">5$</span>
					<span className="text-lg">/</span>
				</p>
				<ul className="flex-1 space-y-2">
					<li className="flex items-center space-x-2">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-teal-600">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
						</svg>
						<span>500 coins to unlock recipes</span>
					</li>
				</ul>
                <p> Ideal for passionate home chefs looking for more variety.</p>
				<button className="px-8 py-3 mt-4 text-lg font-semibold uppercase border rounded-md dark:border-teal-600">Start Now</button>
			</div>
		</div>
	</div>
</section>
      </section>
    </>
  )
}
