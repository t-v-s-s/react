import React, { useState } from "react";

function Radiobutton() {
    const [gender, setGender] = useState("");

    return (
        <div>
            <h1>Radio button and dropdown</h1>

            <input 
                type="radio" 
                onChange={(event) => setGender(event.target.value)} 
                name="gender" 
                id="male" 
                value="Male"
            />
            <label htmlFor="male">Male</label>

            <input 
                type="radio" 
                onChange={(event) => setGender(event.target.value)} 
                name="gender" 
                id="female" 
                value="Female"
            />
            <label htmlFor="female">Female</label>

            <h2>Selected Gender: {gender}</h2>
        </div>
    );
}

export default Radiobutton;
