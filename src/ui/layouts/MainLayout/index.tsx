import React, { ReactNode } from "react";

// UI
import { Box, Header, Sidebar } from "@app/ui";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <Box className="flex h-[100dvh]">
    <Box>
      <Sidebar />
    </Box>
    <Box as="main" className="flex-1 flex flex-col overflow-x-hidden">
      <Box>
        <Header />
      </Box>
      {children}
    </Box>
  </Box>
);

export default MainLayout;
