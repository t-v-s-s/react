import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);  // counter initialized to 0
  const [data, setData] = useState(0);        // data also initialized to 0

  useEffect(() => {
    callOnce();
  }, []); // Runs only once when the component mounts

  function callOnce() {
    console.log("call once");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>Counter: {counter}</p>
      <p>Data: {data}</p>

      <button onClick={() => setCounter(prev => prev + 1)}>Increment Counter</button>
      <button onClick={() => setData(prev => prev + 1)}>Increment Data</button>
    </div>
  );
}

export default UseEffect;
