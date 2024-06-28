import { Link } from "react-router-dom";

const SearchSuggestions = ({suggestions , setIsSubmitted})=>{
    if(!suggestions) return null;

    return (
        <div className="fixed top-0 shadow-md min-h-[200px] pb-4  ml-4  bg-white my-14 rounded-lg w-4/12">
            {suggestions?.map((suggestion)=>
            (
            <Link to={"/results?search_query=" + suggestion} onClick={()=>setIsSubmitted(true)} className="h-full px-5 py-2 hover:bg-gray-200 flex-col flex" key={suggestion}>
                <span><i class="fa-solid fa-magnifying-glass mr-4"></i>{suggestion}</span>
                </Link>))}
        </div>
    )
}

export default SearchSuggestions;