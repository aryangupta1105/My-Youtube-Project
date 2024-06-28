// &key=

import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API_URL} from "../constants";

const useVideoComment = (videoId)=>{
    const [comments , setComments] = useState(null);

    useEffect(()=>{
        getComments();
    },[])

    const getComments = async ()=>{
        const data = await fetch(YOUTUBE_COMMENT_API_URL + videoId + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setComments(json?.items);
    }

    return comments;
}

export default useVideoComment;