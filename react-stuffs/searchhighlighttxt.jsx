import { useState } from "react";

export default function HighlightSearch() {
  const text = "React makes UI development easier";
  const [query, setQuery] = useState("");

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} />
      <p>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase()
            ? <mark key={i}>{part}</mark>
            : part
        )}
      </p>
    </div>
  );
}
