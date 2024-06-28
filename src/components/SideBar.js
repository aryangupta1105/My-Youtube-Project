import { Link } from "react-router-dom";

const SideBar = ()=>{
    return(
        <div className="w-[11%] bg-white px-6 py-2  border">
            <h1>Recommended</h1>
            <ul className="py-2 ">
                <Link to="/"><li>Home</li></Link>
                <li>Shorts</li>
                <li>Trending</li>
                <li>Watch Later</li>
            </ul>
            <div className="w-full my-2 h-[1px] bg-gray-300"></div>
            <h1>Recommended</h1>
            <ul className="py-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Trending</li>
                <li>Watch Later</li>
            </ul>
            <div className="w-full my-2 h-[1px] bg-gray-300"></div>
            <h1>Recommended</h1>
            <ul className="py-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Trending</li>
                <li>Watch Later</li>
            </ul>
            <div className="w-full my-2 h-[1px] bg-gray-300"></div>
            <h1>Recommended</h1>
            <ul className="py-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Trending</li>
                <li>Watch Later</li>
            </ul>
            <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
    )
}

export default SideBar;