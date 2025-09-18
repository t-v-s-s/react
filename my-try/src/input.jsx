import React, { useState } from "react";
function Input(){
   const [val,setVal]=useState("Tanvi")
    return(
        <div>
            <h1>Get input feild value</h1>
            <input type="text" value={val} onChange={(Event)=>setVal(Event.target.value)}placeholder="enter user name" />
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>clear value</button>
        </div>
    )
}
export default Input;