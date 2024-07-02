import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { NOT_AVAILABLE, userIcon } from "../utils/constants";
import { useEffect, useRef, useState } from "react";
import useSearchSuggestion from "../utils/hooks/useSearchSuggestion";
import SearchSuggestions from "./SearchSuggestions";
import { useNavigate } from "react-router-dom";
const Header = ()=>{
    const[searchText , setSearchText] = useState("");
  
    // its rendering the page on each state change but to make it efficient we will use debouncing.. to save some api calls..
    const dispatch = useDispatch();
    const data = useSearchSuggestion(searchText);
    const [isSubmitted , setIsSubmitted] = useState(false);

        // make an api call on each key press 
        // But if time gap between key press is < 200ms 
        // Decline the API CALL..
    const navigate = useNavigate();

    const handleSearchSubmit = ()=>{
        setIsSubmitted(true);
        navigate("/results?search_query=" + searchText);
    }
    const handleMenuClick = ()=>{
        dispatch(toggleMenu());
    }


    const searchContainerRef = useRef(null);

    // to close suggestion page on clicking outside..
    const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
          setIsSubmitted(true);
        }   
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return(
        <div className="w-full object-contain overflow-hidden flex py-2 px-2 md:pr-4 justify-between   items-center ">
            <div className="flex items-center">
                <i className="fa-solid hover:bg-slate-200 duration-300 transition-all rounded-full h-10 w-10 flex items-center justify-center  fa-bars cursor-pointer text-lg md:mx-5"  onClick={handleMenuClick} ></i>
               
                <a href="/">
                    <img src={"https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" || NOT_AVAILABLE}alt="Youtube-logo" className="h-12 hidden md:block" loading="lazy"></img>
                    <img src={"https://www.vhv.rs/dpng/d/0-240_small-youtube-logo-png-transparent-png.png" || NOT_AVAILABLE}alt="Youtube-logo" className="h-5 mr-3 rounded-full object-fit md:hidden" loading="lazy"></img>
                    
                </a>
            </div>
            <div className="md:w-5/12 " ref={searchContainerRef}>
                <form className="flex" onSubmit={(e)=>e.preventDefault()}>
                    <div className="w-full">
                    <input type="text" className="w-10/12  outline-none border border-gray-300 focus:border-blue-600 rounded-l-full px-4 p-2 " onChange={(e)=>{setSearchText(e.target.value);setIsSubmitted(false);}} value={searchText} placeholder=" Search"></input>

                    <button type="submit" onClick={handleSearchSubmit}className="md:w-[50px] p-2 px-2 h-full w-fit border border-gray-300 rounded-r-full"><i class="fa-solid fa-magnifying-glass md:text-md text-sm"></i></button>
                    </div>

                    <button className="rounded-full  w-[40px] hidden lg:block h-[40px] bg-gray-200 cursor-pointer "><i class="fa-solid fa-microphone"></i></button>
                </form>
               
                {!isSubmitted && searchText !==  ""  ? <SearchSuggestions setSearchText={setSearchText} setIsSubmitted={setIsSubmitted} suggestions={data}/> : null}

            </div>
            <div className="w-fit">
                <img src={userIcon|| NOT_AVAILABLE} className="h-8 cursor-pointer rounded-full border " alt="user-icon" loading="lazy"></img>
                 </div>
        </div>
    )
}

export default Header;