import { useEffect, useState } from "react";
import { userIcon } from "../utils/constants";
import useVideoComment from "../utils/hooks/useVideoComments";
import Comment from "./CommentComponent";
import CommentComponent from "./CommentComponent";

const CommentSection = ({video})=>{
    const{snippet , statistics}  = video;
    const{commentCount} = statistics;
    const [yourComment , setYourComment] = useState(null);
    const comments = useVideoComment(video.id);
    const [filteredComments , setFilteredComments] = useState([]);

    useEffect(() => {
        if (comments) {
            setFilteredComments(comments);
        }
    }, [comments]);

    if(!comments) return null;
   
    return(
        <div className="mt-3">
            <div className="flex gap-4">
                <h1 className="font-bold text-xl">{commentCount} Comments</h1>
                <button className="bg-gray-200 p-2 px-4 font-semibold hover:bg-gray-300 rounded-lg duration-400 transition-all " onClick={()=>{
                    const topComments = comments.filter((comment)=>comment.snippet?.topLevelComment?.snippet.likeCount >0);
                    setFilteredComments(topComments);}}>Top Comments</button>
                <button className="bg-gray-200 p-2 px-4 font-semibold hover:bg-gray-300 rounded-lg duration-400 transition-all " onClick={()=>{
                    setFilteredComments(comments);}}>Most Recent</button>
            </div>
            {/* add a comment */}
            <div className="mt-5 flex justify-between items-center gap-5">
                <img src={userIcon} className="h-10 rounded-full"></img>
                <input type="text" className="w-full outline-none text-lg py-3 border-b-[2px] border-b-gray-400" placeholder="Enter Your Comment" onChange={(e)=>setYourComment(e.target.value)} value={yourComment}></input>
                {!yourComment|| yourComment===""?null:<button className="bg-blue-500 p-2 px-4 rounded-lg text-white">Submit</button>}
            </div>
            {filteredComments?.map((comment)=>(<CommentComponent key={comment.id} commentData={comment} />))}

        </div>
    )
}

export default CommentSection;