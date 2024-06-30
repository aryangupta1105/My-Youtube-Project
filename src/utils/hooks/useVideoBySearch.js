import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_SEARCH} from "../constants";

const useVideoBySearch = (searchQuery , setErrorMessage)=>{
    const [videos , setVideos] = useState([]);

    useEffect(()=>{
        getVideoByQuery();
    },[searchQuery])

    const getVideoByQuery = async ()=>{
        
        try{ 
            const data = await fetch(YOUTUBE_VIDEO_SEARCH + searchQuery + " &type=video&key=" + GOOGLE_API_KEY);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setVideos(json?.items);
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message);
        }
    }

    return videos;
}

export default useVideoBySearch;