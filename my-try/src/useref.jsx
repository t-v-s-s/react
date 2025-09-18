import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const inputHandle = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter password";
  };

  const toggleHandle = () => {
    if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
    } else {
      inputRef.current.type = "text";
    }
  };

  return (
    <div>
      <h1>Use Reference</h1>
      <input type="text" ref={inputRef} placeholder="Enter username" />
      <br />
      <button onClick={inputHandle}>Focus on Input Field</button>
      <button onClick={toggleHandle}>Toggle Input Type</button>
    </div>
  );
}

export default UseRef;
