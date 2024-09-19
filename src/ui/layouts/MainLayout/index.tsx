"use client";

import React, { ReactNode } from "react";
import { useDisclosure } from "@nextui-org/react";

// UI
import { Box, Header, Sidebar } from "@app/ui";
import clsx from "clsx";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box className="fixed h-[100dvh]">
        <Sidebar isClose={isOpen} onToggleSidebar={isOpen ? onClose : onOpen} />
      </Box>
      <Box
        as="main"
        className={clsx({
          "ml-64": !isOpen, // The width of the sidebar when opened.
          "ml-44": isOpen, // The width of the sidebar when closed.
        })}
      >
        <Box
          className={clsx("fixed bg-white", {
            "w-[calc(100%-256px)]": !isOpen, // 256px corresponds to w-64 of the Sidebar
            "w-[calc(100%-176px)]": isOpen, // 176px corresponds to w-44 of the Sidebar
          })}
        >
          <Header />
        </Box>
        <Box className="px-10 py-[110px]">{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
