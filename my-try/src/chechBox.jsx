import React, { useState } from "react";

function Checkbox() {
    const [skill, setSkill] = useState([]); // Start with an empty array

    const handleSkills = (event) => {
        const { value, checked } = event.target;
        console.log(value, checked);

        if (checked) {
            setSkill([...skill, value]);
        } else {
            setSkill(skill.filter((e) => e !== value));
        }
    };

    return (
        <div>
            <h3>Select your skills</h3>

            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">Php</label><br /><br />

            <input onChange={handleSkills} type="checkbox" id="android" value="android" />
            <label htmlFor="android">Android</label><br /><br />

            <input onChange={handleSkills} type="checkbox" id="js" value="js" />
            <label htmlFor="js">JavaScript</label><br /><br />

            <input onChange={handleSkills} type="checkbox" id="ts" value="ts" />
            <label htmlFor="ts">TS</label><br /><br />

            <h1>{skill.join(", ")}</h1>
        </div>
    );
}

export default Checkbox;
