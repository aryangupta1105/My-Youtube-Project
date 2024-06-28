import FilterButtonList from "./FilterButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = ()=>{
    return(
        <div className="  overflow-hidden">
            <FilterButtonList/>
            <VideoContainer/>
        </div>
    )
}

export default MainContainer;