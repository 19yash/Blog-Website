import React, { useContext } from "react"
import { Appcontext } from "../context/Appcontext";
const Footer = ()=>{

    const{page,totalPage,handleChange} = useContext(Appcontext);
    
    if(!totalPage) return null;

    return(
        <div className="fixed bottom-0 flex  bg-white w-full p-3 justify-around items-center border shadow-lg "> 
           <div className="space-x-4">
            {
                page>1 &&
                <button onClick={()=>{handleChange(page-1)}} className="border shadow-md px-2 py-1">Previous</button>

            }
            {
                page<totalPage &&
                <button onClick={()=>{handleChange(page+1)}} className="border shadow-md px-2 py-1">Next</button>

            }
           </div>

            <p className="font-semibold">{`${page} Page  of ${totalPage}`}</p>           
        </div>
    )
}

export default Footer;