import { createElement, HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  as?: string;
}

export const Text = ({ as = "p", ...props }: TextProps) =>
  createElement(as, { ...props });
