import { useState } from "react";

export default function UndoRedo() {
  const [history, setHistory] = useState([""]);
  const [index, setIndex] = useState(0);

  const handleChange = (val) => {
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, val]);
    setIndex(index + 1);
  };

  return (
    <div>
      <input onChange={(e) => handleChange(e.target.value)} />
      <p>{history[index]}</p>

      <button disabled={index === 0} onClick={() => setIndex(i => i - 1)}>
        Undo
      </button>
      <button disabled={index === history.length - 1} onClick={() => setIndex(i => i + 1)}>
        Redo
      </button>
    </div>
  );
}
