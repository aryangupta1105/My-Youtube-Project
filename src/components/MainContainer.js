import FilterButtonList from "./FilterButtonList";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    return(
        <div className="w-[99%] mx-auto overflow-hidden px-4">
            <FilterButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;