"use client";

import { Button } from "@nextui-org/button";
import { extendVariants } from "@nextui-org/system";

export const ButtonCustom = extendVariants(Button, {
  variants: {
    variant: {
      bordered: "border",
    },
    color: {
      violet: "bg-violet-primary text-current",
      "violet-rgba": "bg-violet-rgba-medium text-violet-primary",
      gray: "bg-gray-dark",
      none: "bg-transparent",
    },
    size: {
      fit: "w-fit h-fit min-w-fit p-px",
      "square-sm": "w-10 min-w-[unset] h-10 p-0",
    },
    radius: {
      sm: "rounded-md",
    },
  },
  defaultVariants: {
    color: "violet",
  },
  // compoundVariants: means that when the props we define below are used, the class property will be applied, replacing those individual props.
  compoundVariants: [
    {
      color: "violet",
      variant: "bordered",
      class: "bg-transparent border-violet-primary text-violet-primary",
    },
    {
      color: "gray",
      variant: "bordered",
      class: "bg-transparent border-gray-dark text-gray-dark",
    },
  ],
});
