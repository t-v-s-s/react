import React from "react";

function Parent() {
    const name ="Tanvi"
    const displayName = (name) => {
        alert(name);
    };

    return (
        <div>
            <h1>Call parent's component function</h1>
            <button onClick={()=>displayName(name)}>Display Name</button>
        </div>
    );
}

export default Parent;
