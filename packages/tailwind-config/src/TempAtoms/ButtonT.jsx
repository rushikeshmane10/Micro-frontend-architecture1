export default function ButtonT({
  label = "Clickme",
  customClass = "",
  icon,
  iconPosition = "after",
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
    >
      <div
        className={`flex items-center gap-2 ${
          iconPosition === "right" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </button>
  );
}
