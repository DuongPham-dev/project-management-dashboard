import React from "react";
import { Metadata } from "next";

// UI
import { Box } from "@app/ui";
// Constants
import { APP_TITLE } from "@app/constants";

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    "Our Task Management platform is designed to streamline productivity and keep teams organized. With intuitive task creation, real-time tracking, and customizable workflows, users can efficiently manage projects from start to finish. The platform enables collaboration, allowing team members to assign tasks, set deadlines, and monitor progress in one centralized hub. Whether you're working solo or with a team, our tool ensures that tasks are prioritized, deadlines are met, and productivity stays on track",
  icons: [
    {
      url: "/icons/logo.svg",
    },
  ],
  openGraph: {
    images: [
      {
        url: "/images/og-image-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    title: "Task. - Simplify Your Task Management",
    description:
      "Task. is a powerful task management tool that helps you organize, prioritize, and track your tasks efficiently.",
  },
};

const Homepage = () => {
  return <Box>Home page</Box>;
};

export default Homepage;
