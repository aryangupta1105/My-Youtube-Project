import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEO_SEARCH} from "../constants";

const useVideoBySearch = (searchQuery)=>{
    const [videos , setVideos] = useState([]);

    useEffect(()=>{
        getVideoByQuery();
    },[searchQuery])

    const getVideoByQuery = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_SEARCH + searchQuery + " &type=video&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setVideos(json?.items);
    }

    return videos;
}

export default useVideoBySearch;