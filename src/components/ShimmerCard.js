const ShimmerCard = ()=>{
    return(
        <div className="w-[300px] p-1  mt-5">
            {/* bottom part */}<div className="w-[300px] p-1">
            <img className="w-[300px] h-[200px] object-fit rounded-lg bg-[#babcc1]"></img>
            {/* bottom part */}
            <div className="flex gap-5 items-center">
                {/* left part */}
                <div className="h-10 w-10 rounded-full mt-2 bg-[#d8d8d8]"></div>
                {/* right part */}
                <div className="flex mt-3 flex-col gap-2">
                    <h1 className="w-[200px] truncate2 h-4 font-bold rounded-lg bg-[#e4dede] "></h1>
                    <p className="w-[100px] h-4 rounded-lg  bg-[#cfcdcd]"></p>
                    <p className="w-[100px] rounded-lg h-4  bg-[#bbbaba]"></p>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default ShimmerCard;