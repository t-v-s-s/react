import { useState } from "react";

function Toggle (){
     const [display , setDisplay] = useState(true);
     return(
        <>
            <h1>Toggle in React </h1>
            {
                display ? <h1>Tanvi Rocks </h1>: null
            }
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </>
     )
}
export default Toggle;