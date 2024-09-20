"use client";

import { Button } from "@nextui-org/button";
import { extendVariants } from "@nextui-org/system";

// export const ButtonCustom = extendVariants(Button, {
//   variants: {
//     // <- modify/add variants
//     color: {
//       olive: "text-[#000] bg-[#84cc16]",
//       orange: "bg-[#ff8c00] text-[#fff]",
//       violet: "bg-[#8b5cf6] text-[#fff]",
//     },
//     isDisabled: {
//       true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
//     },
//     size: {
//       xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
//       md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
//       xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
//     },
//   },
//   defaultVariants: {
//     // <- modify/add default variants
//     color: "olive",
//     size: "xl",
//   },
//   compoundVariants: [
//     // <- modify/add compound variants
//     {
//       isDisabled: true,
//       color: "olive",
//       class: "bg-[#84cc16]/80 opacity-100",
//     },
//   ],
// });

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
