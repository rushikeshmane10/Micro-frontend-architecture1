export default function Button1({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-brand-dark">
      {children}
    </button>
  );
}
