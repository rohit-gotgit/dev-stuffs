import { useState } from "react";

export default function TagInput() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTag}
      />

      {tags.map((tag, i) => (
        <span key={i}>{tag} </span>
      ))}
    </div>
  );
}
