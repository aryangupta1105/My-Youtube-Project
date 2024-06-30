import { useEffect, useState } from "react";
import {  YOUTUBE_API_URL } from "../constants";

const useVideos = (setErrorMessage)=>{
    const [videos , setVideos] = useState(null);

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async ()=>{
        
        try{ 
            const data = await fetch(YOUTUBE_API_URL);
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

export default useVideos;