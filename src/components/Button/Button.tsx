/* eslint-disable react/display-name */
import { FC } from "react";
import { ButtonProps } from "../../Types/Buttons";

const Button: FC<ButtonProps> = ({
  children,
  type,
  disabled,
  className,
  onClick,
  title,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      title={title}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
