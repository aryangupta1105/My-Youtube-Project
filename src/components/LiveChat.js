import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessages } from "../utils/helper";
import { userIcon } from "../utils/constants";

const LiveChat = ()=>{
    const messages = useSelector((store)=>store.chat.messages);
    const [showLiveChat , setShowLiveChat] = useState(true);
    const dispatch = useDispatch();

    // Api Polling 
    useEffect(()=>{
        const i = setInterval(() => {
            // clearing stored messages after a limit to optimize the chat
            dispatch(addMessage({
                name: "@" + generateRandomNames(),
                message: makeRandomMessages(20) + "🚀"
            }));    
            
        }, 2000);

        return ()=>{
            clearInterval(i);
        }
    } , [messages]);



    const liveMessage = useRef();

    const handleLiveChat = ()=>{
        if(liveMessage.current.value !== "")
        {
                dispatch(addMessage({
                    name : "@Aryan", 
                    message: liveMessage.current.value
                }))
            }
        liveMessage.current.value = "";
    }
    

    return(
        <div className="py-2 mt-5 px-4 border border-gray-300 rounded-lg ">
        <div className="flex justify-between items-center pb-2">
            <h1 className="font-bold text-lg " >Live Chat</h1>
            <button onClick={()=>setShowLiveChat(!showLiveChat)} className="h-10 w-10 rounded-full bg-slate-100 p-1 hover:bg-slate-200 text-lg">
                {showLiveChat?(<i class="fa-solid fa-x "></i>):(<i class="fa-solid fa-chevron-down"></i>)}
                </button>
        </div>
            {
                showLiveChat && 
// Chat box 
            <div className="border-t border-t-gray-300">
                <div className="py-2  flex  flex-col-reverse element rounded-lg h-[400px] overflow-y-scroll">
                    
                    {messages?.map((newMessage , index)=><ChatMessage key={index} name={newMessage.name} message={newMessage.message}/>)}
                    
                </div>
{/* Add your chat to the live chat. */}
                <form className="w-full border-t border-t-gray-300 py-2 flex " onSubmit={(e)=>e.preventDefault()}>
                    <img src={userIcon} className="h-8 w-8 rounded-full border border-black" loading="lazy"></img>
                    <input type="text" ref={liveMessage}  placeholder="Enter your message" className="w-11/12 px-4 p-2 outline-none "></input>
                    <button className="w-8 h-8 rounded-full border outline-none" onClick={handleLiveChat}><i class="fa-solid fa-paper-plane"></i></button>
                </form>
                
                </div>
            }
        </div>
    )
}

export default LiveChat;