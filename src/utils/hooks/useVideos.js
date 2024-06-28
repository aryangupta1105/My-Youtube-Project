import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_API_URL } from "../constants";

const useVideos = (channelId)=>{
    const [videos , setVideos] = useState(null);

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json();
        setVideos(json?.items);
    }

    return videos;
}

export default useVideos;