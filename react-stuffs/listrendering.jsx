export default function List() {
  const items = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
