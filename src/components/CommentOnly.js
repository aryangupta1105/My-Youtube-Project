import { formatViewCount, getDateGap } from "../utils/getDateGap";

const CommentOnly = ({TopLevelData , isReply})=>{

    if(!TopLevelData) return null;
    let commentData;

    if (!isReply) {
        commentData = TopLevelData?.snippet?.topLevelComment?.snippet;
    } else {
        commentData = TopLevelData?.snippet;
    }

    if(!commentData) return null;

    const {
        authorChannelUrl,
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        textOriginal,
        updatedAt,
        publishedAt
    } = commentData;

    
    const publishedDate = new Date(publishedAt);

    const updatedDate = new Date(updatedAt);

    return(
        <div className="flex mt-3 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <a href={authorProfileImageUrl}><img src={authorProfileImageUrl} className="h-10 w-10 mr-4 rounded-full cursor-pointer hover:scale-125 duration-300 transition-all"></img></a>
                    <div className="w-full flex flex-col gap-1">
                       <div className="flex gap-2 ">
                            <a href={authorChannelUrl}>
                            <p className="font-bold">@{authorDisplayName}</p>
                            </a>
                            <p className="hover:text-gray-600 cursor-pointer text-gray-500">{getDateGap(publishedDate) || getDateGap(updatedAt)}</p>
                       </div>
                        <p className="w-[95%] text-[0.8rem]">{textOriginal}</p>
                        <div className="flex gap-3 items-center">
                            <button><i class="fa-regular fa-thumbs-up"></i> {formatViewCount(likeCount)}</button>   
                            <button> <i class="fa-regular fa-thumbs-down"></i></button>       
                         </div>
                         <div>

                         </div>
                    </div>
                </div>
                <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
    )
}
export default CommentOnly;