import React, { ReactNode } from "react";

// UI
import { MainLayout } from "@app/ui";

export const dynamic = "force-dynamic";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <MainLayout>{children}</MainLayout>
);

export default DashboardLayout;
