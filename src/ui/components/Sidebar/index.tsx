import React from "react";
import { Button } from "@nextui-org/button";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";

// UI
import { Box, Logo, Navigation, StatusIndicator } from "@app/ui";
// Mocks
import { PROJECTS_HEADER, ROUTINGS } from "@app/mocks";

export interface SidebarProps {}

const Sidebar = () => {
  return (
    <Box as="aside" className=" w-64 border-r-1 border-gray-medium">
      {/* Main logo */}
      <Box className="flex items-center justify-between border-b-1 p-5">
        <Logo />
        <Button isIconOnly className="w-fit h-fit min-w-0 bg-transparent">
          <MdKeyboardDoubleArrowLeft className="w-6 h-6 text-gray-dark" />
        </Button>
        {/*  */}
        {false && (
          <Button isIconOnly>
            <MdKeyboardDoubleArrowRight />
          </Button>
        )}
      </Box>
      {/* Navigation */}
      <Box as="section" className="p-5">
        <Navigation navigationItems={ROUTINGS} />
        <Divider className="my-5" />
        <Navigation
          header={PROJECTS_HEADER}
          navigationItems={[
            {
              id: 1,
              href: "/mobile-app",
              label: "mobile app",
              leftIcon: <StatusIndicator color="green" />,
              rightIcon: (
                <Button
                  isIconOnly
                  className="w-fit h-fit p-0 min-w-0 bg-transparent"
                >
                  <BsThreeDots className="w-4 h-4" />
                </Button>
              ),
            },
            {
              id: 2,
              href: "/website-redesign",
              label: "website redesign",
              leftIcon: <StatusIndicator color="orange" />,
              rightIcon: (
                <Button
                  isIconOnly
                  className="w-fit h-fit p-0 min-w-0 bg-transparent"
                >
                  <BsThreeDots className="w-4 h-4" />
                </Button>
              ),
            },
            {
              id: 3,
              href: "/design-system",
              label: "design system",
              leftIcon: <StatusIndicator color="lavender" />,
              rightIcon: (
                <Button
                  isIconOnly
                  className="w-fit h-fit p-0 min-w-0 bg-transparent"
                >
                  <BsThreeDots className="w-4 h-4" />
                </Button>
              ),
            },
            {
              id: 4,
              href: "/wireframes",
              label: "wireframes",
              leftIcon: <StatusIndicator color="blue" />,
              rightIcon: (
                <Button
                  isIconOnly
                  className="w-fit h-fit p-0 min-w-0 bg-transparent"
                >
                  <BsThreeDots className="w-4 h-4" />
                </Button>
              ),
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
