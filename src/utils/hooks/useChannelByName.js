// &key=

import { useEffect, useState } from "react";
import { CHANNEL_NAME_API_URL, GOOGLE_API_KEY, YOUTUBE_COMMENT_API_URL} from "../constants";

const useChannelByName = (channelName , setErrorMessage)=>{
    const [channel , setChannel] = useState(null);

    useEffect(()=>{
        getChannel();
    },[channelName])

    const getChannel = async ()=>{
        
        try{ 
            const data = await fetch(CHANNEL_NAME_API_URL + channelName + "&key=" + GOOGLE_API_KEY);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setChannel(json?.items[0]);
        }
        catch(err){
            console.log(err.message);
            setErrorMessage(err.message);
        }
    }

    return channel;
}

export default useChannelByName;