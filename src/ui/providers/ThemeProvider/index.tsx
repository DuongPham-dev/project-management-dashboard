import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <NextUIProvider>{children}</NextUIProvider>
);
