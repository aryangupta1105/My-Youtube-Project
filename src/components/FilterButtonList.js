import FilterButton from "./FilterButton";
import "./VideoSuggestion.css"
const FilterButtonList = ()=>{
    const buttonList = ["All" ,"Live","Kapil Sharma" , "CSS" , "Coding" , "Data Structures" , "Abdul Bari" , "Entertainment" , "Vlogs" , "Music" , "React" , "HTML"];    
    return(
        <div className="w-full">
            <div className="flex element overflow-y-hidden  overflow-x-scroll justify-center gap-3">
                {buttonList.map((buttonName)=><FilterButton  key={buttonName} name={buttonName}/>)}
            </div>
        </div>
    )
}

export default FilterButtonList;