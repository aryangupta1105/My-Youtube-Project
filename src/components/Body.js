import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = ()=>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
    return(
        <div className="w-full flex gap-5 mt-2">
            {isMenuOpen && <SideBar/>}
            <Outlet/>
        </div>
    )
}

export default Body;