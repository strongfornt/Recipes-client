import useAuth from "../../../../hooks/useAuth"


export default function DeveloperInfo() {
    const {theme} = useAuth()
  return (
    <>
    <section className=" ">
	<div className="container lg:mt-20    flex flex-col justify-center  mx-auto lg:flex-row lg:justify-evenly">
		<div className="flex    items-center justify-center   p-6 flex-1 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.postimg.cc/WzpZQnxm/ahsan.jpg" alt="" className="object-contain lg:ml-14    rounded-full  lg:rounded-md h-64 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center mt-4 lg:mt-0  p-4 md:p-6 g:p-0 lg:mr-10 rounded-sm flex-1 text-left">
			<h1 className={`font-bold leading-none text-3xl ${theme === 'light' && 'text-[#4b5664]'}`}>
				Who am i?
			</h1>
			<p className={`mt-2 mb-2 text-lg  md:text-xl  ${theme ==="light" ? 'text-black/65' :'text-white'}`}>  I'm Ahsan ullah, a jr. front-end developer who believes in the power of creativity and collaboration.
			</p>
            <p className={`text-base ${theme ==="light" ? 'text-black/65' : 'text-white/80'}`} >
                <span className="font-semibold">Education:</span> Diploma in Computer Department, Barisal Polytechnic Institute , 2023.
            </p>
            <div className="my-2">
                <p className={`${theme ==="light" ? 'text-black/65' : 'text-white/80'} font-semibold`}>Skills:</p>
                <ul className={`text-base ml-8 list-disc ${theme ==="light" ? 'text-black/65' : 'text-white/80'}`}>
                    <li>Proficient in React.js for front-end development.</li>
                    <li>Familiar with Express.js and MongoDB for server-side development.</li>
                    <li>Experience with Firebase for user authentication.</li>
                </ul>
            </div>
            <div>
                <p className={`${theme ==="light" ? 'text-black/65' : 'text-white/80'} font-semibold`}>Projects-</p>
                <p className={`ml-2 ${theme ==="light" ? 'text-black/65' : 'text-white/80'} font-normal`}>Online Study-Related Projects:</p>
                <ul className={`text-base ml-8 list-disc ${theme ==="light" ? 'text-black/65' : 'text-white/80'}`}>
                    <li>Developed using React.js and Tailwind CSS for the frontend.</li>
                    <li>Utilized Express.js and MongoDB for the backend.</li>
                    <li>Integrated Firebase for user authentication and authorization.</li>
                </ul>
                <div className="flex gap-8 ml-5 mt-3">
                <a href="https://onlinestudy-908ec.web.app/" target="_blank" className={`${theme ==="light" ? 'text-black/65' : 'text-white/80'} font-semibold underline`}> Live link</a>
                <a href="https://github.com/strongfornt/Task-Bud/tree/main?tab=readme-ov-file" target="_blank"  className={`${theme ==="light" ? 'text-black/65' : 'text-white/80'} font-semibold underline`}>Source Code</a>
                </div>
            </div>

        
		
		</div>
	</div>
</section>
    </>
  )
}
