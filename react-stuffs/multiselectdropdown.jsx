import { useState } from "react";

export default function MultiSelect() {
  const options = ["React", "Node", "JS"];
  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div>
      {options.map((o) => (
        <div key={o} onClick={() => toggle(o)}>
          <input type="checkbox" checked={selected.includes(o)} readOnly />
          {o}
        </div>
      ))}
    </div>
  );
}
