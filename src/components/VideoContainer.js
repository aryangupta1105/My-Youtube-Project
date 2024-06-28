
import VideoCard from "./VideoCard";
import useVideos from "../utils/hooks/useVideos";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{

   const videos = useVideos();
    if(!videos) return <Shimmer/>
    return(
        <div className="mt-5 flex  justify-center flex-wrap  gap-5 ">
            {videos?.map((video)=>(<Link  to={"/watch?v=" + video?.id} key={video?.id} ><VideoCard  videoData={video}/></Link>))}
        </div>
    )
}

export default VideoContainer;