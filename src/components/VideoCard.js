
import { getDateGap , formatViewCount } from "../utils/getDateGap";
import usePfP from "../utils/hooks/usePfP";
import useVideoById from "../utils/hooks/useVideoById";

const VideoCard = ({videoData})=>{
    const {snippet , statistics ,id} = videoData;
    const{thumbnails, channelId , description , title , publishedAt} = snippet;

    const dateGap = getDateGap(publishedAt);

    const pfp = usePfP(channelId);
    if(!pfp) return null;
    return (
        <div className="w-[300px] p-1">
            <img src={thumbnails.high.url || thumbnails.maxres.url || thumbnails.standard.url || thumbnails.medium.url || thumbnails.default.url} className="w-[300px] h-[200px] object-fit rounded-lg"></img>
            {/* bottom part */}
            <div className="flex gap-5 items-center">
                {/* left part */}
                <img src={pfp} className="h-10 rounded-full"></img>
                {/* right part */}
                <div>
                    <h1 className="w-[200px] truncate2 font-bold ">{title}</h1>
                    <p>{snippet.channelTitle}</p>
                    <p>{formatViewCount(statistics.viewCount) + " views"} - {dateGap}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;