import { createElement, HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as: string;
}

const Box = ({ as = "div", ...props }: BoxProps) =>
  createElement(as, { ...props });

export default Box;
