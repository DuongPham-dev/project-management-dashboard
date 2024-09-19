import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import clsx from "clsx";

// UI
import {
  Box,
  Icon,
  Logo,
  Navigation,
  NavigationItem,
  NavigationItemCustomProps,
  StatusIndicator,
  Text,
} from "@app/ui";
// Mocks
import { ROUTINGS } from "@app/mocks";

export interface SidebarProps {
  isClose?: boolean;
  onToggleSidebar?: () => void;
}

export const Sidebar = ({ isClose = false, onToggleSidebar }: SidebarProps) => {
  // When the Sidebar is collapsed, 'My Projects' only displays the project name instead of the icon
  const customRenderMyProjects = useCallback(
    ({ isActive, ...props }: NavigationItemCustomProps) =>
      isClose ? (
        <Link
          href={props.href}
          className={clsx("rounded-md", {
            "bg-violet-rgba-light": isActive,
            "hover:bg-violet-rgba-light": !isActive,
          })}
        >
          <Text
            as="span"
            className="inline-block text-xs text-left capitalize p-2 font-medium"
          >
            {props.label}
          </Text>
        </Link>
      ) : (
        <NavigationItem {...props} isCollapse={isClose} />
      ),
    [isClose]
  );

  const myProjects = useMemo(
    () =>
      [
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
      ].map((project) => ({ ...project, render: customRenderMyProjects })),
    [customRenderMyProjects]
  );

  return (
    <Box
      as="aside"
      className={clsx("h-full border-r-1 border-gray-medium", {
        "w-44": isClose, // The width of the sidebar when closed.
        "w-64": !isClose, // The width of the sidebar when opened.
      })}
    >
      {/* Main logo */}
      <Box className="h-[70px] flex items-center justify-between border-b-1 gap-3 px-5">
        <Logo />
        <Button
          isIconOnly
          onClick={onToggleSidebar}
          className="w-fit h-fit min-w-0 bg-transparent"
        >
          {isClose ? (
            <Icon icon={MdKeyboardDoubleArrowRight} />
          ) : (
            <Icon icon={MdKeyboardDoubleArrowLeft} />
          )}
        </Button>
      </Box>
      {/* Navigation */}
      <Box as="section" className="p-5">
        <Navigation navigationItems={ROUTINGS} isCollapse={isClose} />
        <Divider className="my-5" />
        <Navigation
          header={{
            title: "My Project",
            icon: (
              <Button
                isIconOnly
                className="w-fit h-fit p-0 min-w-0 bg-transparent"
              >
                <Icon icon={CiSquarePlus} size={5} />
              </Button>
            ),
          }}
          navigationItems={myProjects}
          isCollapse={isClose}
        />
      </Box>
    </Box>
  );
};
