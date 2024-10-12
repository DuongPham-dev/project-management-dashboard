"use client";

import React, { ReactNode } from "react";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

export interface DragAndDropProviderProps {
  children: ReactNode;
}

export const DragAndDropProvider = ({ children }: DragAndDropProviderProps) => (
  <DragDropContext
    onDragEnd={(result: DropResult, provided: ResponderProvided) => {
      console.log("DragDropContext", { result, provided });
    }}
  >
    {children}
  </DragDropContext>
);
