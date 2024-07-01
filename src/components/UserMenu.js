import { Link } from "react-router-dom";
import { userIcon } from "../utils/constants";
import { useSelector } from "react-redux";

const UserMenu = ({setShowUserMenu})=>{
    const user = useSelector((store)=>store.user);
    
    console.log(user);
    return(
        <div className="w-[300px] absolute right-14 bg-white px-5 py-2 top-10 rounded-lg border h-fit">
            <div>
                <img src={userIcon} className="h-10 w-10 rounded-full"></img>
                <div className="flex flex-col border-b  gap-2">
                    <h2 className="text-lg ">{user?user.displayName :"Default User"}</h2>
                    <p>@userName</p>
                    <button  className="my-2 text-blue-500 w-fit font-thin">View Your Channel</button>
                </div>

                <ul>
                    {/* if !user show sign in else sign out */}
                    <Link to="/LoginPage" onClick={()=>setShowUserMenu(false)}>Sign In</Link>
                </ul>
            </div>
        </div>
    )

    }

export default UserMenu;
