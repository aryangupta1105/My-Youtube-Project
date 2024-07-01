import { Link } from "react-router-dom";
import FilterButton from "./FilterButton";
import "./VideoSuggestion.css"
import useVideoCategories from "../utils/hooks/useVideoCategories";
import { useState } from "react";
const FilterButtonList = ()=>{
    const[errorMessage , setErrorMessage] = useState(""); 
    const videoCategories = useVideoCategories(setErrorMessage);

    return(
        <div className="w-[88%] mx-auto">
            <div className="flex filter overflow-x-scroll gap-3">
                {videoCategories?.map((buttonName)=><Link to={"/results?search_query=" + buttonName?.snippet?.title} key={buttonName.id} className="inline-block whitespace-nowrap"><FilterButton  key={buttonName?.snippet?.title} name={buttonName?.snippet?.title}/></Link>)}
            </div>
        </div>
    )
}

export default FilterButtonList;