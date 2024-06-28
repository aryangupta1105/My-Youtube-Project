import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_API_URL_VIDEO, YOUTUBE_LIKED_VIDEO_URL} from "../constants";

const useLikedVideos = ()=>{
    const [likedVideos , setLikedVideos] = useState(null);

    useEffect(()=>{
        getLikedVideos();
    },[])

    const getLikedVideos = async ()=>{
        const data = await fetch(YOUTUBE_LIKED_VIDEO_URL + GOOGLE_API_KEY);
        const json = await data.json();
        console.log(json);
    }

    return likedVideos;
}

export default useLikedVideos;