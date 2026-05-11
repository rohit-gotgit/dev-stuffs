import { useRef, useState } from "react";

export default function HoldToConfirm() {
  const timer = useRef(null);
  const [done, setDone] = useState(false);

  const start = () => {
    timer.current = setTimeout(() => {
      setDone(true);
    }, 2000);
  };

  const stop = () => {
    clearTimeout(timer.current);
  };

  return (
    <button
      onMouseDown={start}
      onMouseUp={stop}
      onMouseLeave={stop}
    >
      {done ? "Confirmed" : "Hold to Confirm"}
    </button>
  );
}
