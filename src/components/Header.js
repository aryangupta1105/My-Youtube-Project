import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { userIcon } from "../utils/constants";
const Header = ()=>{

    const dispatch = useDispatch();

    const handleMenuClick = ()=>{
        dispatch(toggleMenu());
    }
    return(
        <div className="w-full overflow-hidden flex p-2 pr-4 justify-between  items-center ">
            <div className="flex items-center">
                <i className="fa-solid fa-bars cursor-pointer text-lg mx-5" onClick={handleMenuClick} ></i>
               
                <a href="/">
                    <img src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" alt="Youtube-logo" className="h-12"></img>
                    
                </a>
            </div>
            <div className="w-5/12 ">
                <input type="text" className="w-10/12 outline-none border border-gray-300 focus:border-blue-600 rounded-l-full px-4 p-2 " placeholder=" Search"></input>
                <button className="w-1/12 p-2 px-2 h-full border border-gray-300 rounded-r-full"><i class="fa-solid fa-magnifying-glass"></i></button>

                <button className="rounded-full ml-2 w-[40px] h-[40px] bg-gray-200 cursor-pointer "><i class="fa-solid fa-microphone"></i></button>
            </div>
            <div>
                <img src={userIcon} className="h-8 cursor-pointer rounded-full border " alt="user-icon"></img>
            </div>
        </div>
    )
}

export default Header;