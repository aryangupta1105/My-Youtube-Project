import { useEffect, useState } from "react";
import { CHANNEL_PFP_API, GOOGLE_API_KEY } from "../constants";

const usePfP = (channelId , setErrorMessage)=>{
    const [pfp , setPfP] = useState();

    useEffect(()=>{
        if(channelId)
        {getChannelPfP();}
    },[channelId]);

    const getChannelPfP = async ()=>{
        try{
            const response = await fetch(CHANNEL_PFP_API +channelId+ '&fields=items%2Fsnippet%2Fthumbnails&key=' + GOOGLE_API_KEY);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const json = await response.json();
    
            setPfP(json?.items[0]?.snippet?.thumbnails?.default?.url);
        
        }
        catch(err){
            console.log(err.code);
            setErrorMessage(err.message);
        }
    }

    return pfp;
}

export default usePfP;