const ResultShimmerCard = ()=>{
    return(
        <div className="w-full flex justify-between gap-10 p-1 px-10">
            
            {/* bottom part */}
                {/* left part */}
           <div className="flex gap-2">
                <div src="" className="max-w-[400px] w-[350px] h-[253px] object-cover bg-[rgb(186,188,193)] rounded-lg" loading="lazy"></div>
                <div className="h-10 w-10 rounded-full mt-2 bg-[#d8d8d8]"></div>
                        {/* right part */}
                <div className="flex mt-3 flex-col gap-2">
                    <h1 className="w-[200px] truncate2 h-4 font-bold rounded-lg bg-[#e4dede] "></h1>
                    <p className="w-[100px] h-4 rounded-lg  bg-[#cfcdcd]"></p>
                    <p className="w-[100px] rounded-lg h-4  bg-[#bbbaba]"></p>
                    <p className="h-[50px] rounded-lg w-[500px]  bg-[#d9d4d4]"></p>
                </div>
            
           </div>
            <button className="bg-[#bbbaba] h-8 w-2 "></button>
        </div>
    )
}

export default ResultShimmerCard;