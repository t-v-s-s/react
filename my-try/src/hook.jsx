import { useState } from "react";

function Hook() {
  const [fruit, setFruit] = useState("Mango");

  const handleFruit = () => {
    setFruit("Banana");
  };

  return (
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change fruit name</button>
    </div>
  );
}

export default Hook;
