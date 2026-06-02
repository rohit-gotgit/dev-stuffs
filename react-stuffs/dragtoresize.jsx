import { useState } from "react";

export default function ResizeBox() {
  const [width, setWidth] = useState(200);

  return (
    <div>
      <input
        type="range"
        min="100"
        max="500"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />

      <div
        style={{
          width,
          height: 100,
          background: "#ccc"
        }}
      />
    </div>
  );
}
