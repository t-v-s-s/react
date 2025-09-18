import React, { useState } from 'react';

function Greeting() {
    const names = ["Sachin", "Mohit", "Radha","tanvi"];
    const [nameIndex, hideNameIndex] = useState(2);

    const handleClick = () => {
        hideNameIndex((nameIndex + 1) % names.length);
    }

    return (
        <div>
            <h1>Hi, {names[nameIndex]}!</h1>
            <button onClick={handleClick}>Press</button>
        </div>
    );
}

export default Greeting;