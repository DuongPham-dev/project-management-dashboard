import React, { ReactNode } from "react";

// UI
import { MainLayout } from "@app/ui";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <MainLayout>{children}</MainLayout>
);

export default DashboardLayout;
