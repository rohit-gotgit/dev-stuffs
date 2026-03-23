export default function Modal({ show, children }) {
  if (!show) return null;

  return (
    <div className="modal">
      {children}
    </div>
  );
}
