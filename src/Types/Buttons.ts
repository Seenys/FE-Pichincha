import { ReactNode } from "react";

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    type: 'submit' | 'reset' | 'button';
    disabled?: boolean;
    title?: string;
    onClick?: () => void;
  }