import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { closeMenu } from "../utils/appSlice";
import useVideoById from "../utils/hooks/useVideoById";
import { useSearchParams } from "react-router-dom";
import usePfP from "../utils/hooks/usePfP";
import { formatViewCount } from "../utils/getDateGap";
import useVideoComment from "../utils/hooks/useVideoComments";
import { monthNames } from "../utils/constants";
import VideoDescription from "./VideoDescription";
import ChannelDetail from "./ChannelDetail";
import CommentSection from "./CommentSection";
import VideoSuggestionSection from "./VideoSuggestionSection";

const WatchPage = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

    

    

    const [searchParams , setSearchParams] = useSearchParams();

    const videoId = searchParams.get("v");
    const comments = useVideoComment(videoId);
    const video = useVideoById(videoId);

    
    
    if(!video) return null;
    
    const {snippet , statistics} = video;
    const { localized} = snippet;
    const {commentCount , likeCount, viewCount } = statistics;

  

    return(
        <div className="w-full pl-[6%] absolute -z-10 text-sm">
            <div className="w-8/12">
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId+ "?autoplay=1&rel=0"}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-full rounded-xl p-0 h-[530px]"></iframe>
                
                
                <ChannelDetail video={video}/>
                <VideoDescription video={video} />
                <CommentSection video={video}/>
            </div>
            <VideoSuggestionSection/>
        </div>

    )
}

export default WatchPage; 