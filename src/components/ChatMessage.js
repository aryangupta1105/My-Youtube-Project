import { userIcon } from "../utils/constants";

const ChatMessage = ({name , message})=>{
    return(
        <div className=" flex gap-2 p-2 items-center">
            <img src={userIcon} className="h-8 w-8 rounded-full" loading="lazy"></img>
            <p className="font-bold text-md">{name}  <span className="font-normal ">{message}</span> </p>
        </div>
    )
}

export default ChatMessage;