import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <div style={{ width: "100%", background: "#eee" }}>
        <div
          style={{
            width: progress + "%",
            height: "10px",
            background: "green"
          }}
        />
      </div>
      <button onClick={() => setProgress(p => Math.min(p + 10, 100))}>
        Increase
      </button>
    </div>
  );
}
