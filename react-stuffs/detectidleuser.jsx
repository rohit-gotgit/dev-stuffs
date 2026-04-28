import { useEffect, useState } from "react";

export default function IdleDetector() {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIdle(true), 3000);

    const reset = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), 3000);
    };

    window.addEventListener("mousemove", reset);

    return () => window.removeEventListener("mousemove", reset);
  }, []);

  return <p>{idle ? "User is idle" : "User is active"}</p>;
}
