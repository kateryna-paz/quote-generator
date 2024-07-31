import React from "react";

type inputProps = {
  type: string;
  value: string;
  placeholder: string;
  setInput: (value: string) => void;
};

const FormInput = ({ type, value, placeholder, setInput }: inputProps) => {
  return (
    <input
      className="px-4 py-2"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default FormInput;
