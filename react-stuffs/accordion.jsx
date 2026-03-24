import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(null);

  const data = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h3 onClick={() => setOpen(open === i ? null : i)}>
            {item}
          </h3>
          {open === i && <p>Content for {item}</p>}
        </div>
      ))}
    </div>
  );
}
