import useAuth from "../../hooks/useAuth"


// eslint-disable-next-line react/prop-types
export default function RelatedRecipes({recipes}) {
    const {theme} = useAuth()
    const {image,name,category} = recipes || {}
  return (
    <>
        <div className={`p-3 rounded-md shadow-md mb-6 ${theme === "light" ? 'dark:bg-gray-50 dark:text-gray-900' : 'border border-teal-400'}`}>
	<img src={image} alt={name} className="object-cover object-center w-full rounded-md h-64 dark:bg-gray-500" />
    <div className="-translate-y-56 translate-x-3 " >
    <span className="block text-xs bg-teal-600 w-fit p-2 rounded-sm  font-medium tracking-widest uppercase dark:text-white">{category}</span>
    </div>
	<div className=" mb-2">
		<h2 className="text-xl font-semibold tracking-wide">{name}</h2>
	</div>
	
</div>
    </>
  )
}
