import React from "react";
 
const Button = ({ children, customCss = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-green-500 text-white ${customCss}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
 
export default Button;