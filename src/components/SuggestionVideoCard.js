
import { useState } from "react";
import { getDateGap , formatViewCount } from "../utils/getDateGap";
import usePfP from "../utils/hooks/usePfP";

const SuggestionVideoCard = ({videoData})=>{
    const {snippet , statistics ,id} = videoData;
    const{thumbnails, channelId , description , title , publishedAt} = snippet;
    const[errorMessage , setErrorMessage] = useState("");

    const dateGap = getDateGap(publishedAt);

    const pfp = usePfP(channelId , setErrorMessage);
    if(!pfp && videoData) return null;
    return (
        <div className=" flex p-1 gap-5 items-start ">
            <img src={thumbnails.high.url || thumbnails.maxres.url || thumbnails.standard.url || thumbnails.medium.url || thumbnails.default.url} loading="lazy" className="w-[180px] h-[100px] object-cover rounded-lg"></img>
            {/* bottom part */}
            <div className="flex gap-5 items-center">
                
                <div>
                    <h1 className="w-[150px] truncate2 text-sm font-bold ">{title}</h1>
                    <p>{snippet.channelTitle}</p>
                    <p>{formatViewCount(statistics.viewCount) + " views"} - {dateGap}</p>
                </div>
            </div>
            <button><i class="fa-solid fa-ellipsis-vertical"></i></button>

        </div>
    )
}

export default SuggestionVideoCard;