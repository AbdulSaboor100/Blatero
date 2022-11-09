import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div className="w-full h-auto">
      <button
        onClick={onClick}
        className="w-full text-center py-3 rounded bg-green-600  text-white hover:bg-green-700 focus:outline-none my-1"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
