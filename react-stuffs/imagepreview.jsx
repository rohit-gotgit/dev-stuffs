import { useState } from "react";

export default function ImagePreview() {
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {img && <img src={img} width="200" />}
    </div>
  );
}
