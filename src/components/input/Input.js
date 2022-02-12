import { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(
  (
    {
      type = "text",
      placeholder,
      value,
      onChange,
      name,
      onBlur,
      multiline = false,
    },
    ref
  ) => {
    return multiline ? (
      <textarea
        ref={ref}
        name={name}
        onBlur={onBlur}
        className="input textarea"
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : (
      <input
        ref={ref}
        name={name}
        onBlur={onBlur}
        type={type}
        className="input"
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;
