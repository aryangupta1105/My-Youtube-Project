import { Link } from "react-router-dom";
import useVideos from "../utils/hooks/useVideos";
import VideoCard from "./VideoCard";
import "./VideoSuggestion.css";
import SuggestionVideoCard from "./SuggestionVideoCard";
import FilterButtonList from "./FilterButtonList";
import Shimmer from "./Shimmer";
import LiveChat from "./LiveChat";
import ResultShimmer from "./ResultShimmer";
import { useState } from "react";

const VideoSuggestionSection = ({isLive})=>{
    const[errorMessage , setErrorMessage] = useState("");
    const videos = useVideos(setErrorMessage);
    if(!videos) return <div className="w-3/12 overflow-hidden"><ResultShimmer/></div>;
    return(
        <div className=" w-4/12 px-5 ">
            <div className="flex flex-col gap-3 overflow-y-scroll element h-full ">
            {isLive === "live" ? (<LiveChat />):<p className="text-center font-bold text-gray-500">Live Chat not available</p>}
            <FilterButtonList/>
            {videos?.map((video)=>(<a  href={"/watch?v=" + video?.id} ><SuggestionVideoCard  videoData={video}/></a>))}
            </div>
        </div>
    )
}

export default VideoSuggestionSection;