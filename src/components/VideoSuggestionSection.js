import { Link } from "react-router-dom";
import useVideos from "../utils/hooks/useVideos";
import VideoCard from "./VideoCard";
import "./VideoSuggestion.css";
import SuggestionVideoCard from "./SuggestionVideoCard";
import FilterButtonList from "./FilterButtonList";
import Shimmer from "./Shimmer";

const VideoSuggestionSection = ()=>{
    const videos = useVideos();
    if(!videos) return <Shimmer/>;
    return(
        <div className="absolute w-3/12 right-0 top-0 mr-14">
            <div className="flex flex-col gap-3 overflow-y-scroll h-screen element scroll-smooth ">
            <FilterButtonList/>
            {videos?.map((video)=>(<Link  to={"/watch?v=" + video?.id} ><SuggestionVideoCard  videoData={video}/></Link>))}
            </div>
        </div>
    )
}

export default VideoSuggestionSection;