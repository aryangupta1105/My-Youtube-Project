import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useEffect, useRef } from "react";

const SideBar = ()=>{
   const Explore = ["Trending"
    ,"JavaScript"
    ,"ReactJS"
    ,"Music"
    ,"Films"
    ,"Live"
    ,"Gaming"
    ,"News"
    ,"Sports"
    ,"Learning"
    ,"Fashion & beauty"
    ]
    return(
        <div className="w-fit absolute lg:relative px-3 z-10 bg-white py-2 border">
            
            <ul className=" border-b border-b-gray-400 py-2  flex flex-col ">
                <Link to="/" className="hover:bg-gray-300 duration-400 rounded-lg  transition-all px-3 p-2"><li><i class="fa-solid fa-house mr-3 "></i>Home</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 rounded-lg  transition-all px-3 p-2"><li><i class="fa-brands fa-square-youtube mr-3"></i>Shorts</li></Link>
                <Link to="/" className="hover:bg-gray-300 duration-400 rounded-lg  transition-all px-3 p-2"><li>Subscriptions</li></Link>
                
            </ul >

            <ul className=" border-b border-b-gray-400 pb-2 flex flex-col">
                <h1 className="my-3 px-1 font-bold text-gray-700">Explore <i class="fa-solid ml-2 fa-chevron-right"></i></h1>
                {
                    Explore?.map((item)=>(
                        <Link to={"/results?search_query=" + item} key={item} className="rounded-lg  hover:bg-gray-300 duration-400  px-3 transition-all p-2"><li>{item}</li></Link>
                    ))
                }
            </ul>
            
            <ul className=" border-b border-b-gray-400 py-3 flex flex-col">
                
                <Link to="/"  className="rounded-lg  hover:bg-gray-300 duration-400  transition-all px-1 py-2"><li><i class="fa-solid fa-gear text-lg mr-3"></i>Settings</li></Link>
                <Link to="/"  className="rounded-lg  hover:bg-gray-300 duration-400 transition-all px-1 py-2"><li><i class="fa-solid fa-book mr-3"></i>Report History</li></Link>
                <Link to="/"  className="rounded-lg  hover:bg-gray-300 duration-400  px-1 transition-all py-2"><li><i class="fa-solid fa-suitcase-medical mr-3"></i>Help</li></Link>
                <Link to="/"  className="rounded-lg  hover:bg-gray-300 duration-400  px-1 transition-all py-2"><li><i class="fa-solid mr-3  fa-paper-plane"></i>Send feedback</li></Link>
                        
                
            </ul>
            
        </div>
    )
}

export default SideBar;