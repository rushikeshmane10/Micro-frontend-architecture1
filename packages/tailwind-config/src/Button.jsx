import React from "react";

const Button1 = ({ children, customCss = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white ${customCss}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button1;
