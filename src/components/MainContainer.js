import FilterButtonList from "./FilterButtonList";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    return(
        <div className="w-11/12  mx-auto">
            <FilterButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;