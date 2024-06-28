import { useEffect, useState } from "react";
import { CHANNEL_PFP_API, GOOGLE_API_KEY } from "../constants";

const usePfP = (channelId)=>{
    const [pfp , setPfP] = useState();

    useEffect(()=>{
        getChannelPfP();
    },[]);

    const getChannelPfP = async ()=>{
        const response = await fetch(CHANNEL_PFP_API +channelId+ '&fields=items%2Fsnippet%2Fthumbnails&key=' + GOOGLE_API_KEY);
        const json = await response.json();

        setPfP(json?.items[0]?.snippet?.thumbnails?.default?.url);
    }

    return pfp;
}

export default usePfP;