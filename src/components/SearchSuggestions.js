import { Link } from "react-router-dom";

const SearchSuggestions = ({suggestions , setIsSubmitted , setSearchText})=>{
    if(!suggestions) return <img src="https://th.bing.com/th/id/OIP.dLhMYdxFdUfOXGdODvgsGQHaFj?rs=1&pid=ImgDetMain"></img>;

    
    return suggestions.length>0? (
        <div className="fixed top-0 z-10 shadow-md  pb-4  ml-4  bg-white my-14 rounded-lg w-4/12">
            {suggestions?.map((suggestion)=>
            (
            <Link to={"/results?search_query=" + suggestion} onClick={()=>{setIsSubmitted(true) ; setSearchText(suggestion)}} className="h-full px-5 py-2 hover:bg-gray-200 flex-col flex" key={suggestion}>
                <span><i class="fa-solid fa-magnifying-glass mr-4"></i>{suggestion}</span>
                </Link>))}
        </div>
    ):null;
}

export default SearchSuggestions;