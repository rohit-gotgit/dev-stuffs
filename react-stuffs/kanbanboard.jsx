import { useState } from "react";

export default function Kanban() {
  const [tasks, setTasks] = useState({
    todo: ["Task 1"],
    done: []
  });

  const move = () => {
    setTasks({
      todo: [],
      done: [...tasks.done, ...tasks.todo]
    });
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <h3>Todo</h3>
        {tasks.todo.map(t => <p key={t}>{t}</p>)}
      </div>

      <div>
        <h3>Done</h3>
        {tasks.done.map(t => <p key={t}>{t}</p>)}
      </div>

      <button onClick={move}>Move All</button>
    </div>
  );
}
