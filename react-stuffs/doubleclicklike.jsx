import { useState } from "react";

export default function DoubleClickLike() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      onDoubleClick={() => setLiked(true)}
      style={{ width: 200, height: 200, background: "#ddd" }}
    >
      {liked ? "❤️ Liked" : "Double click"}
    </div>
  );
}
