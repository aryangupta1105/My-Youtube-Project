import FilterButton from "./FilterButton";

const FilterButtonList = ()=>{
    const buttonList = ["All" ,"Live","Kapil Sharma" , "CSS" , "Coding" , "Data Structures" , "Abdul Bari" , "Entertainment" , "Vlogs" , "Music" , "React" , "HTML"];    
    return(
        <div className="">
            <div className="flex justify-center gap-3">
                {buttonList.map((buttonName)=><FilterButton  key={buttonName} name={buttonName}/>)}
            </div>
        </div>
    )
}

export default FilterButtonList;