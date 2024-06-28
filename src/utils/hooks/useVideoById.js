// &key=

import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_API_URL_VIDEO} from "../constants";

const useVideoById = (videoId)=>{
    const [video , setVideo] = useState(null);

    useEffect(()=>{
        getVideoById();
    },[])

    const getVideoById = async ()=>{
        const data = await fetch(YOUTUBE_API_URL_VIDEO + videoId + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setVideo(json?.items[0]);
    }

    return video;
}

export default useVideoById;