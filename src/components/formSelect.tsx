import React from "react";

type selectProps = {
  value: string;
  setOption: (option: string) => void;
  typeOptions: string[];
  title: string;
};

const FormSelect = ({ value, setOption, typeOptions, title }: selectProps) => {
  return (
    <>
      <label>{title}</label>
      <select
        className="px-4 py-2"
        value={value}
        onChange={(e) => setOption(e.target.value)}
      >
        {typeOptions.map((type) => {
          return (
            <option className="leading-8" key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FormSelect;
