import { Link } from "react-router-dom";
import useVideoById from "../utils/hooks/useVideoById";
import VideoCard from "./VideoCard";
import { useState } from "react";

const ResultVideoCard = ({videoId})=>{
   const[errorMessage , setErrorMessage] = useState("");

   const data = useVideoById(videoId, setErrorMessage);
   if(!data) return null; 
   return(
        <a  href={"/watch?v=" + videoId} key={videoId} ><VideoCard isResult={true} videoData={data}/></a>
        
   )
}
export default ResultVideoCard;