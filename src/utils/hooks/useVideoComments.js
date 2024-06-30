// &key=

import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API_URL} from "../constants";

const useVideoComment = (videoId ,setErrorMessage)=>{
    const [comments , setComments] = useState(null);

    useEffect(()=>{
        getComments();
    },[])

    const getComments = async ()=>{
        
        try{ 
            const data = await fetch(YOUTUBE_COMMENT_API_URL + videoId + "&key=" + GOOGLE_API_KEY);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setComments(json?.items);
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message);
        }
    }

    return comments;
}

export default useVideoComment;