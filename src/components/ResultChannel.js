import { useState } from "react";

const ResultChannel = ({channel})=>{
    console.log(channel);
    const [isSubscribed , setIsSubscribed] = useState(false);
    if(!channel ) return;
    const {snippet} = channel;
    const {thumbnails , channelId , channelTitle , description , title} = snippet;
    return(
        <div className="flex my-4 items-center">
            <a href={"https://www.youtube.com/channel/" + channelId} className="w-full flex items-center gap-5 p-1">
            <div className="w-[400px] flex items-center justify-center h-[233px]">
                <img src={thumbnails.high.url || thumbnails.maxres.url || thumbnails.standard.url || thumbnails.medium.url || thumbnails.default.url} className="rounded-full h-[180px] w-[180px] object-cover " loading="lazy"></img>
                
            </div>
            {/* bottom part */}
            <div className="flex flex-col ">
               
                    <h1 className="w-11/12 truncate2 font-bold  text-xl hover:underline duration-400 transition-all">{title}</h1>
                    <div className="flex gap-3 text-gray-500">
                        <p>🚀 {channelTitle}</p>
                    </div>
                    <p className="truncate2 cursor-pointer overflow-ellipsis w-11/12">{description}</p>
            </div>
           
        </a>
            <button className="bg-black text-white hover:bg-gray-800 h-fit ml-4 p-2 px-4 rounded-3xl " onClick={()=>{
                            setIsSubscribed(!isSubscribed);
                        }}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
        </div>
    )
}

export default ResultChannel;