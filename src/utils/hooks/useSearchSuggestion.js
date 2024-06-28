import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants";
import { json } from "react-router-dom";

const useSearchSuggestion = (searchQuery)=>{
    const [suggestions , setSuggestions] = useState([]);
    useEffect(()=>{
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 200);

        return ()=>{
            clearTimeout(timer);
        }
    } , [searchQuery])

    const getSearchSuggestions = async ()=>{
        if(searchQuery ==="") return;
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);
    }

    return suggestions;
}

export default useSearchSuggestion;