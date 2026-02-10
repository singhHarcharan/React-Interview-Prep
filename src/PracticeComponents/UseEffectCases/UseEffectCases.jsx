import { useEffect, useState } from "react";

function UseEffectCases() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  // 1️⃣ Runs on EVERY render
  useEffect(() => {
    console.log("Effect: runs on every render");
  });

  // 2️⃣ Runs ONCE (componentDidMount)
  useEffect(() => {
    console.log("Effect: runs only once");

    return () => {
      console.log("Cleanup: component unmount");
    };
  }, []);

  // 3️⃣ Runs when `count` changes
  useEffect(() => {
    console.log("Effect: count changed to", count);
  }, [count]);

  // 4️⃣ Runs when `value` OR `toggle` changes
  useEffect(() => {
    console.log("Effect: value or toggle changed");
  }, [value, toggle]);

  // 5️⃣ Effect with cleanup on dependency change
  useEffect(() => {
    console.log("Effect with cleanup, toggle =", toggle);

    return () => {
      console.log("Cleanup before toggle changes or unmount");
    };
  }, [toggle]);

  return (
    <div style={{ padding: "16px" }}>
      <h2>useEffect Dependency Cases</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <hr />

      <input
        placeholder="Type something"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <hr />

      <button onClick={() => setToggle(t => !t)}>
        Toggle ({toggle.toString()})
      </button>
    </div>
  );
}

export default UseEffectCases;
