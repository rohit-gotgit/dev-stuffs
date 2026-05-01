import { useState } from "react";

export default function PasswordMatch() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  return (
    <div>
      <input type="password" onChange={(e) => setP1(e.target.value)} />
      <input type="password" onChange={(e) => setP2(e.target.value)} />

      <p>{p1 && p2 && (p1 === p2 ? "Matched" : "Not matched")}</p>
    </div>
  );
}
