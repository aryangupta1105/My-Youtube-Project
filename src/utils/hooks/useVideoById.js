// &key=

import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_API_URL_VIDEO} from "../constants";

const useVideoById = (videoId , setErrorMessage)=>{
    const [video , setVideo] = useState(null);

    useEffect(()=>{
        getVideoById();
    },[])

    const getVideoById = async ()=>{
        try{ 
            const data = await fetch(YOUTUBE_API_URL_VIDEO + videoId + "&key=" + GOOGLE_API_KEY);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setVideo(json?.items[0]);
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message);
        }
    
    }

    return video;
}

export default useVideoById;