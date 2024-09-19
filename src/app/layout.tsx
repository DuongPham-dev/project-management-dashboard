import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Styles
import "@app/styles/globals.css";
// UI
import { Box, Text, ThemeProvider } from "@app/ui";
// Constants
import { APP_TITLE, WARNING_MESSAGE } from "@app/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    "Our Task Management platform is designed to streamline productivity and keep teams organized. With intuitive task creation, real-time tracking, and customizable workflows, users can efficiently manage projects from start to finish. The platform enables collaboration, allowing team members to assign tasks, set deadlines, and monitor progress in one centralized hub. Whether you're working solo or with a team, our tool ensures that tasks are prioritized, deadlines are met, and productivity stays on track",
  icons: [
    {
      url: "/icons/logo.svg",
    },
  ],
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={`${inter.variable}`}>
      <Box className="hidden xl:block">
        <ThemeProvider>{children}</ThemeProvider>
      </Box>
      <Box className="h-[100dvh] flex xl:hidden flex-col justify-center items-center gap-3 px-10">
        <Text
          as="h2"
          className="text-primary text-2xl md:text-4xl md:text-center font-bold"
        >
          {WARNING_MESSAGE.DEVICE_INVALID_TITLE}
        </Text>
        <Text className="md:text-xl">
          {WARNING_MESSAGE.DEVICE_INVALID_DESC}
        </Text>
      </Box>
    </body>
  </html>
);

export default MainLayout;
