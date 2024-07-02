import { useState } from "react";
import { NOT_AVAILABLE } from "../utils/constants";

const ResultChannel = ({channel})=>{
    console.log(channel);
    const [isSubscribed , setIsSubscribed] = useState(false);
    if(!channel ) return;
    const {snippet} = channel;
    const {thumbnails , channelId , channelTitle , description , title} = snippet;
    return(
        <div className="flex pl-10 md:pl-0 w-full my-4 items-center">
            <a href={"https://www.youtube.com/channel/" + channelId} className="w-full flex items-center gap-5 p-1">
            <div className="w-[400px] flex items-center justify-center h-[233px] ">
                <img src={thumbnails?.high?.url || thumbnails?.maxres?.url || thumbnails?.standard?.url || thumbnails?.medium?.url || thumbnails?.default.url || NOT_AVAILABLE} className="rounded-full md:h-[180px] w-[100px] lg:w-[180px] object-contain lg:object-cover" ></img>
                
            </div>
            {/* bottom part */}
            <div className="flex flex-col ">
               
                    <h1 className="w-11/12 truncate2 font-bold  text-xl hover:underline duration-400 transition-all">{title}</h1>
                    <div className="flex gap-3 text-gray-500">
                        <p>🚀 {channelTitle}</p>
                    </div>
                    <p className="truncate2 cursor-pointer overflow-ellipsis w-11/12">{description}</p>

                    <button className="bg-black text-white w-fit hover:bg-gray-800 h-fit mt-2 p-2 px-4 md:hidden rounded-3xl " onClick={()=>{
                            setIsSubscribed(!isSubscribed);
                        }}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
            </div>
           
        </a>
            <button className="bg-black text-white hover:bg-gray-800 hidden md:block h-fit ml-4 p-2 px-4 rounded-3xl " onClick={()=>{
                            setIsSubscribed(!isSubscribed);
                        }}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
        </div>
    )
}

export default ResultChannel;