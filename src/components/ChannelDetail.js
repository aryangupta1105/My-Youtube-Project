import { useState } from "react";
import { formatViewCount } from "../utils/getDateGap";
import usePfP from "../utils/hooks/usePfP";
import { NOT_AVAILABLE } from "../utils/constants";
const ChannelDetail = ({video})=>{
    const[errorMessage , setErrorMessage] = useState("");

    const pfp = usePfP(video?.snippet?.channelId , setErrorMessage ); 
    const{statistics , snippet} = video;
    const{likeCount } = statistics;
    const{channelTitle , channelId , localized } = snippet;
    const [isSubscribed , setIsSubscribed] = useState(false);
    
    return(
       <div>
         <h1 className="font-semibold w-full text-wrap py-2 text-lg">{localized.title}</h1>
        <div className="flex items-center justify-between">
                    {/* left part */}
                    <div className="flex gap-3 items-center">
                        <a href={"https://www.youtube.com/channel/" + channelId} className="flex gap-3 items-center">
                            <img src={pfp|| NOT_AVAILABLE} className="h-12 rounded-full"></img>
                            <h2 className="font-bold ">{channelTitle}</h2>
                        </a>
                        <button className="bg-black text-white hover:bg-gray-800 ml-4 p-2 px-4 rounded-3xl " onClick={()=>{
                            setIsSubscribed(!isSubscribed);
                        }}>{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
                    </div>
                    {/* right part */}
                    <div >
                        <button className="bg-gray-100 p-2 px-3 rounded-l-full border-r  border-r-gray-300"><i class="fa-solid fa-thumbs-up"></i>   <span className="border-r">{likeCount? formatViewCount(likeCount): null}</span></button>
                        <button className="bg-gray-100 p-2 px-3 rounded-r-full "><i class="fa-solid  fa-thumbs-down" ></i></button>
                        <button className="bg-gray-100 hover:bg-gray-200 transition-all duration-400 ml-4 p-2 px-4 rounded-3xl " >Clip<i class="fa-solid fa-scissors px-1"></i></button>
                        <button className="bg-gray-100 hover:bg-gray-200 transition-all duration-400 ml-4 p-2 px-4 rounded-3xl " >Download<i class="fa-solid fa-download px-1"></i></button>
                        <button className="bg-gray-100 hover:bg-gray-200 transition-all duration-400  ml-4 p-2 px-4 rounded-3xl " >Share  <i class="fa-solid fa-share"></i></button>
                    </div>
                </div>
       </div>
    )
}

export default ChannelDetail;