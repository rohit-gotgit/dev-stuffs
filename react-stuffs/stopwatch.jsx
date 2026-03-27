import { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  const start = () => {
    ref.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stop = () => clearInterval(ref.current);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
