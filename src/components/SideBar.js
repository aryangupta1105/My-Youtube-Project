import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useEffect, useRef } from "react";

const SideBar = ()=>{
   
    return(
        <div className="w-[11%]  z-10 bg-white py-2 border">
            
            <ul className=" border-b border-b-gray-400 flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >
            <h1 className="py-2 px-3  font-bold">For You</h1>
            <ul className="  border-b border-b-gray-400 flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >
            <h1 className="py-2 px-3  font-bold">For You</h1>
            <ul className="  border-b border-b-gray-400 flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >
            <h1 className="py-2 px-3  font-bold">For You</h1>
            <ul className="  border-b border-b-gray-400 flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >
            <h1 className="py-2 px-3  font-bold">For You</h1>
            <ul className="  border-b border-b-gray-400 flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >
        </div>
    )
}

export default SideBar;