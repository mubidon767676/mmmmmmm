export default function Button({ 
  label, 
  onClick, 
  variant = "primary", 
  disabled = false 
}) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800 focus:ring-black"
      : variant === "secondary"
      ? "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400"
      : "border border-black text-black hover:bg-black hover:text-white focus:ring-black"; // outline

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${disabled ? disabledStyles : ""}`}
    >
      {label}
    </button>
  );
}
