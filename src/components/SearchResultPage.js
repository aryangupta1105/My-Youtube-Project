import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useVideoBySearch from "../utils/hooks/useVideoBySearch";
import VideoSuggestionSection from "./VideoSuggestionSection";
import VideoCard from "./VideoCard";
import ResultVideoCard from "./ResultVideoCard";
import useVideoById from "../utils/hooks/useVideoById";
import Shimmer from "./Shimmer";
import ResultShimmer from "./ResultShimmer";
import useChannelByName from "../utils/hooks/useChannelByName";
import ResultChannel from "./ResultChannel";

const SearchResultPage = ()=>{
    const [searchParams , setSearchParams] = useSearchParams();
    const [query , setQuery] = useState(searchParams.get("search_query"));
    const[errorMessage , setErrorMessage] = useState("");

    useEffect(() => {
        results.length= 0;
        setQuery(searchParams.get("search_query") || "");
    }, [searchParams]);
    
    const results = useVideoBySearch(query , setErrorMessage);
    
    const channel = useChannelByName(query , setErrorMessage);
    
    if(!(results && results.length >0)) return <ResultShimmer/>;

    console.log(channel);

    return(
        <div className="w-full flex flex-col gap-3 px-14 py-4 ">
            {<ResultChannel channel={channel}/>}
            {results?.map((video)=>(
                 <ResultVideoCard key={video?.id?.videoId} videoId={video?.id?.videoId}/>
            ))}
        </div>
    )
}

export default SearchResultPage;