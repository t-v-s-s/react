import React, { useRef } from "react";

function Uncontroled() {
    const userRef = useRef();
    const passwordRef = useRef();

    // Using getElementById
    const handleForm = (e) => {
        e.preventDefault();
        const user = document.getElementById("user").value;
        const password = document.getElementById("password").value;
        console.log("handleForm (getElementById):", user, password);
    };

    // Using useRef
    const handleFormRef = (e) => {
        e.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log("handleFormRef (useRef):", user, password);
    };

    return (
        <div>
            <h1>Uncontrolled Component (with getElementById)</h1>
            <form onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter your name" />
                <br /><br />
                <input type="password" id="password" placeholder="Enter your password" />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            <hr /><hr />

            <h1>Uncontrolled Component (with useRef)</h1>
            <form onSubmit={handleFormRef}>
                <input
                    type="text"
                    ref={userRef}
                    id="userRef"
                    placeholder="Enter your name"
                />
                <br /><br />
                <input
                    type="password"
                    ref={passwordRef}
                    id="passwordRef"
                    placeholder="Enter your password"
                />
                <br /><br />
                <button type="submit">Submit with Ref</button>
            </form>
        </div>
    );
}

export default Uncontroled;
