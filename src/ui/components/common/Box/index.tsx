import { createElement, HTMLAttributes, memo } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  as?: string;
}

export const Box = memo(({ as = "div", ...props }: BoxProps) =>
  createElement(as, { ...props })
);

Box.displayName = "Box";
