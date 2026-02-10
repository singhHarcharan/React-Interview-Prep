import { useEffect, useState } from "react";


function DebouncedSearch() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <p>Typed value: {input}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}

export default DebouncedSearch;
