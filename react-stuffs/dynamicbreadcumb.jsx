export default function Breadcrumb() {
  const path = ["Home", "Products", "Shoes"];

  return (
    <div>
      {path.map((item, i) => (
        <span key={i}>
          {item}
          {i < path.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
