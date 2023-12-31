import React from "react";
import { Link } from "react-router-dom";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset, localSetValue } = useCounter();

  return (
    <div className="App">

      <p className="container1">{count}</p>
      <div className="container2"><button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>C</button> </div>
      
      <div>
      <input type="number"
        placeholder="Enter a value"
        onChange={(e) => localSetValue(Number(e.target.value))}/>
      </div>


          <p className="linkHome"> Back to <Link to="/">Home</Link>page</p>

    </div>
  );
}

export default Counter;
