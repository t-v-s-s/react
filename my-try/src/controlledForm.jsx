import React, { useState } from "react";
function Form(){
    const [name,setName]=useState("");
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            <h1>Controlled Component  </h1>
            <form action="" method="get ">
                <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter your name " /> 
                <br /><br />
                <input type="number" onChange={(event)=>setNumber(event.target.value)} placeholder="Enter your number " /> 
                <br /><br />
                <input type="email"onChange={(event)=>setEmail(event.target.value)} placeholder="Enter your email  " /> 
                <br /><br />
                <input type="password" onChange={(event)=>setPassword(event.target.value)}placeholder="Enter your password " /> 
                <br /><br />
                <button >Submit</button>
                <button onClick={()=>setEmail('')}>Clear</button>
                <h3>{name}</h3>
                <h3>{number}</h3>
                <h3>{email}</h3>
                <h3>{password}</h3>

            </form>
        </div>

    )
}
export default Form;