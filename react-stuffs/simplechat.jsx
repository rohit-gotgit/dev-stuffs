import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const send = (e) => {
    if (e.key === "Enter") {
      setList([...list, msg]);
      setMsg("");
    }
  };

  return (
    <div>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={send} />

      {list.map((m, i) => <p key={i}>{m}</p>)}
    </div>
  );
}
