import { createElement, HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: string;
}

export const Box = ({ as = "div", ...props }: BoxProps) =>
  createElement(as, { ...props });
