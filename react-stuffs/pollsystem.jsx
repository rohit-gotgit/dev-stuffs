import { useState } from "react";

export default function Poll() {
  const [votes, setVotes] = useState({ A: 0, B: 0 });

  const vote = (opt) => {
    setVotes(prev => ({ ...prev, [opt]: prev[opt] + 1 }));
  };

  return (
    <div>
      <button onClick={() => vote("A")}>Option A</button>
      <button onClick={() => vote("B")}>Option B</button>

      <p>A: {votes.A}</p>
      <p>B: {votes.B}</p>
    </div>
  );
}
