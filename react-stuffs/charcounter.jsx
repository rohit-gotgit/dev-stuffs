import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>{text.length} characters</p>
    </div>
  );
}
