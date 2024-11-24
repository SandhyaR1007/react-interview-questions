import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState();
  let timeoutref = useRef();
  useEffect(() => {
    if (pause === false) {
      timeoutref.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    } else if (pause) {
      clearInterval(timeoutref.current);
    }

    return () => {
      clearInterval(timeoutref.current);
    };
  }, [pause]);
  return (
    <div>
      {" "}
      <h1> {counter}</h1>
      <button onClick={() => setPause(false)}>start</button>
      <button onClick={() => setPause(true)}>stop</button>
      <button
        onClick={() => {
          setPause();
          setCounter(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;
