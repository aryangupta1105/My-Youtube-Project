
import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, VIDEO_CATEGORIES_API_URL, YOUTUBE_COMMENT_API_URL} from "../constants";

const useVideoCategories = (setErrorMessage)=>{
    const [videoCategories , setVideoCategories] = useState(null);

    useEffect(()=>{
        getVideoCategories();
    },[])

    const getVideoCategories = async ()=>{
        
        try{ 
            const data = await fetch(VIDEO_CATEGORIES_API_URL);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setVideoCategories(json?.items);
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message);
        }
    }

    return videoCategories;
}

export default useVideoCategories;