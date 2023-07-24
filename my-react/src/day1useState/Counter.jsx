import React from "react"
import { useState } from "react"

export const Counter =()=>{
    const [count,setCount] = useState(0);
    const handleInc =()=>{
        setCount((prev)=> prev+ 1);
    }
    const handleDec =()=>{
        setCount((prev)=> prev- 1);
    }
     return(
         <div>
            <h1>counter</h1>
            <p>{ count }</p>
           <button onClick={()=>handleInc()}>Inc</button>
           <button onClick={()=>handleDec()}>Dec</button>

         </div>
     )
}
