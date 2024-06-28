const FilterButton = ({name})=>{
    return(
        <div className="">
            <button className="border px-4 p-1 bg-gray-200 rounded-lg  hover:bg-black hover:text-white duration-400 transition-all">{name}</button>
        </div>
    )
}

export default FilterButton;