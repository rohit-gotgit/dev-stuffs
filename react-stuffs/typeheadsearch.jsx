import { useState, useEffect } from "react";

export default function Typeahead() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!query) return;
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data =>
        setResults(
          data.filter(u =>
            u.name.toLowerCase().includes(query.toLowerCase())
          )
        )
      );
  }, [query]);

  const handleKey = (e) => {
    if (e.key === "ArrowDown") setActive(a => a + 1);
    if (e.key === "ArrowUp") setActive(a => a - 1);
  };

  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKey}
      />
      <ul>
        {results.map((r, i) => (
          <li key={r.id} style={{ background: i === active ? "#ddd" : "" }}>
            {r.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
