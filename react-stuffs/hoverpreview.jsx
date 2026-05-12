import { useState } from "react";

export default function HoverCard() {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      Hover me

      {show && (
        <div style={{ border: "1px solid black" }}>
          Preview Content
        </div>
      )}
    </div>
  );
}
