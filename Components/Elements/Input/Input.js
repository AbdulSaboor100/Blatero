import React from "react";

const Input = ({ ...rest }) => {
  return (
    <div className="w-full h-auto">
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        {...rest}
      />
    </div>
  );
};

export default Input;
