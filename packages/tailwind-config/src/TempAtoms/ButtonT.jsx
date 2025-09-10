export default function ButtonT({
  label = "Clickme", // Default label
  customClass = "",
  icon, // Accepts JSX like <ArrowRight size={16} />
  iconPosition = "after", // "before" or "after"
  ...props
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2   bg-[#173b4e]
                  text-white
                  rounded-md px-3 py-2 
                  w-[128px] h-[37px] relative overflow-hidden 
                   text-sm font-medium font-[Montserrat] leading-[150%]
                  hover:bg-[#1f4c63] active:scale-95 transition-all duration-200
                  ${customClass}`}
      {...props}
    >
      {/* Show icon BEFORE label */}
      {icon && iconPosition === "before" && (
        <span className="flex items-center">{icon}</span>
      )}

      {label}

      {/* Show icon AFTER label */}
      {icon && iconPosition === "after" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}
