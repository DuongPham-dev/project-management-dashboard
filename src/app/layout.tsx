import { Inter } from "next/font/google";

// Styles
import "@app/styles/globals.css";
// UI
import { Box, Text, ThemeProvider } from "@app/ui";
// Constants
import { WARNING_MESSAGE } from "@app/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
