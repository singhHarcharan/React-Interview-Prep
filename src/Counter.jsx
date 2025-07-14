import { useMemo } from "react";

// A simple component wrapped with React.memo
const Counter = useMemo(({ count }) => {
  console.log("Counter component re-rendered");
  return <h2>Count: {count}</h2>;
}, []);

export default Counter;