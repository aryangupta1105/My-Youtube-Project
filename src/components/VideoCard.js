
import { useState } from "react";
import { getDateGap , formatViewCount } from "../utils/getDateGap";
import usePfP from "../utils/hooks/usePfP";
import { NOT_AVAILABLE } from "../utils/constants";

const VideoCard = ({videoData , isResult})=>{
    const {snippet , statistics ,id} = videoData;
    const{thumbnails, channelId , description , title , publishedAt} = snippet;
    const[errorMessage , setErrorMessage] = useState("");

    const dateGap = getDateGap(publishedAt);

    const pfp = usePfP(channelId , setErrorMessage);
    if(!pfp) return null;
    
    return !isResult?(
        <div className="w-[300px]  p-1">
            <img src={thumbnails.high.url || thumbnails.maxres.url || thumbnails.standard.url || thumbnails.medium.url || thumbnails.default.url || NOT_AVAILABLE} className="w-[300px] h-[200px] object-fit rounded-lg" loading="lazy"></img>
            {/* bottom part */}
            <div className="flex gap-5 items-center">
                {/* left part */}
                <img src={pfp} className="h-10 rounded-full"></img>
                {/* right part */}
                <div>
                    <h1 className="w-[200px] truncate2 font-bold ">{title}</h1>
                    <p>{snippet.channelTitle}</p>
                    <p>{formatViewCount(statistics.viewCount) + " views"} - {dateGap}</p>
                </div>
            </div>
        </div>
    ):(
        <div className="w-full md:pl-0 pl-10 flex flex-col md:flex-row mx-auto gap-5 p-1">
            <img src={thumbnails.high.url || thumbnails.maxres.url || thumbnails.standard.url || thumbnails.medium.url || thumbnails.default.url || NOT_AVAILABLE} className="max-w-[400px] h-[253px] object-cover rounded-lg" loading="lazy"></img>
            {/* bottom part */}
            <div className="flexflex-col ">
               
                    <h1 className="w-11/12 truncate2 font-bold ">{title}</h1>
                    
                    <div className="flex gap-3 text-gray-500">
                        <img src={pfp} className="h-10 rounded-full"></img>
                        <p>{snippet.channelTitle}</p>
                    </div>
                    <p>{formatViewCount(statistics.viewCount) + " views"} - {dateGap}</p>
                    <p className="truncate2 cursor-pointer overflow-ellipsis w-11/12">{description}</p>
            </div>
            
            <button className="hidden md:block"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
    )
}

export default VideoCard;