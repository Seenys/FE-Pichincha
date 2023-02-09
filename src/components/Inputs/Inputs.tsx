/* eslint-disable react/display-name */
import { FC, forwardRef } from "react";
import { InputProps } from "../../Types/Inputs";

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, className, ...rest }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          className={className}
          placeholder={placeholder}
          {...rest}
          autoComplete="off"
        />
      </>
    );
  }
);

export default Input;
