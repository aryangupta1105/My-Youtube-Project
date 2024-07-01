import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants";
import { json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../searchSlice";

const useSearchSuggestion = (searchQuery , setErrorMessage)=>{
    const [suggestions , setSuggestions] = useState([]);
    const searchCache = useSelector((store)=>store.search);
    const dispatch = useDispatch();
    /* {
           "iphone": ["iphone 11" , "Iphone 12"]
        }   
           if(searchCache[searchQuery]){ setSuggestions(searchCache[searchQuery])}
    */

    useEffect(()=>{
        const timer = setTimeout(() => {
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        }, 200);

        return ()=>{
            clearTimeout(timer);
        }
    } , [searchQuery])

    const getSearchSuggestions = async ()=>{
        
        
        try{
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();

            setSuggestions(json[1]);
            dispatch(cacheResults({
                [searchQuery]: json[1]}
            ));
        }
        catch(err){
            console.log(err.message);
        }
    }

    return suggestions;
}

export default useSearchSuggestion;