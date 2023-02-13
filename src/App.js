import "./style.css";
import React from 'react';
import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count > 0) {
      let id = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(id);
    }
  }, [count]);
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(10)}>Reset</button>
    </div>
  );
}
