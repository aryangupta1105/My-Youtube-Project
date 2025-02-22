import { useState } from "react";
import { monthNames } from "../utils/constants";
import { formatViewCount } from "../utils/getDateGap";

const VideoDescription = ({video})=>{
    const[descriptionFormat , setDescriptionFormat] = useState(false);

    if(!video) return null;
    const{snippet , statistics} = video;
    const{viewCount} = statistics;
    const {publishedAt , tags , description } = snippet;
    const publishedDate = new Date(publishedAt);


    return(
        <div className="bg-gray-200 px-4 p-2 rounded-xl my-3">
            <div className="flex flex-col md:flex-row justify-between gap-2 font-semibold ">
                <div className="md:w-3/12 w-full flex gap-4">
                {viewCount?<p>{formatViewCount(viewCount)} views</p>:null}
                <p>{publishedDate.getDate()} {monthNames[publishedDate.getMonth()]}  {publishedDate.getFullYear()}</p>
                </div>
                <div className="md:w-9/12 flex flex-wrap gap-1">
                    {tags?.map((tag)=>(<p className="cursor-pointer text-blue-600">{"#"+tag}</p>))}
                </div>
            </div>
            {!descriptionFormat ? (
                <div className="my-2">
                <p className="space-y-3 whitespace-pre-line line-clamp-2 text-ellipsis text-gray-800 ">{description}</p>
                <button className="text-black font-semibold" onClick={()=>setDescriptionFormat(true)}>read more</button>
                </div>
            )
            :(
                <div className="my-2">
                <p className="space-y-3 whitespace-pre-line text-gray-800 ">{description}</p>
                <button className="text-black font-semibold" onClick={()=>setDescriptionFormat(false)}>read less</button>
            </div>
        )}
    </div>
    )
}

export default VideoDescription;