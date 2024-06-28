import { Link } from "react-router-dom";
import useVideoById from "../utils/hooks/useVideoById";
import VideoCard from "./VideoCard";

const ResultVideoCard = ({videoId})=>{
   const data = useVideoById(videoId);
   if(!data) return null; 
   console.log(data);
   return(
        <Link  to={"/watch?v=" + videoId} key={videoId} ><VideoCard isResult={true} videoData={data}/></Link>
        
   )
}
export default ResultVideoCard;