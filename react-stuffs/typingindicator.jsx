import { useEffect, useState } from "react";

export default function TypingIndicator() {
  const [typing, setTyping] = useState(false);

  const handleChange = () => {
    setTyping(true);
  };

  useEffect(() => {
    if (!typing) return;

    const timer = setTimeout(() => {
      setTyping(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [typing]);

  return (
    <div>
      <input onChange={handleChange} />
      {typing && <p>Typing...</p>}
    </div>
  );
}
