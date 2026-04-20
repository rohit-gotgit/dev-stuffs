import { useState } from "react";

const quotes = ["Keep going", "Stay focused", "Build daily"];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  const generate = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <div>
      <button onClick={generate}>New Quote</button>
      <p>{quote}</p>
    </div>
  );
}
