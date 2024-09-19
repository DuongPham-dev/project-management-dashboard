import clsx from "clsx";
import { createElement, HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  as?: string;
}

export const Text = ({ as = "p", className, ...props }: TextProps) =>
  createElement(as, {
    ...props,
    className: clsx("text-gray-dark", className),
  });
