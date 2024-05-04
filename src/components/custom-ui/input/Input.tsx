import React, { Ref, ChangeEvent, InputHTMLAttributes } from "react";

import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (inputProps, ref: Ref<HTMLInputElement>) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (inputProps.disabled) return;
      inputProps.onChange?.(e);
    };

    return (
      <input
        {...inputProps}
        onChange={handleChange}
        ref={ref}
        className={`joyhub-input ${inputProps.className}`}
      />
    );
  }
);

export default Input;
