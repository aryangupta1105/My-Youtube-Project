import { useState } from "react";
import { formatViewCount, getDateGap } from "../utils/getDateGap";
import CommentOnly from "./CommentOnly";

const CommentList = ({comments , isReply = false})=>{
    
    const[showReplies , setShowReplies] = useState(false);

    return(comments?.map((comment)=>
        (
            <div className=" py-3" key={comment?.id}>

                <CommentOnly TopLevelData={comment} isReply={isReply} />

                {comment?.replies?.comments && 
                    <div className="ml-14">
                            <h1 className=" font-bold hover:text-blue-800 text-blue-500 cursor-pointer" onClick={()=>setShowReplies(!showReplies)}>Replies <i class="fa-solid ml-2  fa-chevron-down"></i></h1>  
                            <div className="ml-2 my-1 pl-5 border-l-2 border-l-gray-400"> 
                                {showReplies && (
                                        <CommentList isReply={true} comments={comment.replies.comments} />
                                    )}
                            </div>
                    </div>
            }
    </div>
                ))
        )
}

export default CommentList;