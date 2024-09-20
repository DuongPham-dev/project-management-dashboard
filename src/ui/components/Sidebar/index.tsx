"use client";

import React, { memo, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import clsx from "clsx";

// Components
import {
  Box,
  Icon,
  Logo,
  Navigation,
  NavigationItem,
  NavigationItemCustomProps,
  StatusIndicator,
  Text,
  Button,
} from "@app/ui";
// Mocks
import { ROUTINGS } from "@app/mocks";
// Utils
import { generateURL } from "@app/utils";
// Constants
import { ROUTER } from "@app/constants";

export interface SidebarProps {
  isClose?: boolean;
  onToggleSidebar?: () => void;
}

export const Sidebar = memo(
  ({ isClose = false, onToggleSidebar }: SidebarProps) => {
    const pathname = usePathname();

    // When the Sidebar is collapsed, 'My Projects' only displays the project name instead of the icon
    const customRenderMyProjects = useCallback(
      ({ isActive, ...props }: NavigationItemCustomProps) =>
        isClose ? (
          <Link
            href={props.href}
            className={clsx("group rounded-md", {
              "bg-violet-rgba-light": isActive,
              "hover:bg-violet-rgba-light": !isActive,
            })}
          >
            <Text
              as="span"
              className={clsx(
                "inline-block text-xs text-left capitalize p-2 font-medium",
                {
                  "text-primary": isActive,
                  "group-hover:text-primary": !isActive,
                }
              )}
            >
              {props.label}
            </Text>
          </Link>
        ) : (
          <NavigationItem {...props} isCollapse={isClose} isActive={isActive} />
        ),
      [isClose]
    );

    const myProjects = useMemo(
      () =>
        [
          {
            id: 1,
            href: generateURL(ROUTER.PROJECTS, ["mobile-app"]),
            label: "mobile app",
            leftIcon: <StatusIndicator color="green" />,
            rightIcon: (
              <Button isIconOnly color="none" size="fit">
                <BsThreeDots className="w-4 h-4" />
              </Button>
            ),
          },
          {
            id: 2,
            href: generateURL(ROUTER.PROJECTS, ["website-redesign"]),
            label: "website redesign",
            leftIcon: <StatusIndicator color="orange" />,
            rightIcon: (
              <Button isIconOnly color="none" size="fit">
                <BsThreeDots className="w-4 h-4" />
              </Button>
            ),
          },
          {
            id: 3,
            href: generateURL(ROUTER.PROJECTS, ["design-system"]),
            label: "design system",
            leftIcon: <StatusIndicator color="lavender" />,
            rightIcon: (
              <Button isIconOnly color="none" size="fit">
                <BsThreeDots className="w-4 h-4" />
              </Button>
            ),
          },
          {
            id: 4,
            href: generateURL(ROUTER.PROJECTS, ["wireframes"]),
            label: "wireframes",
            leftIcon: <StatusIndicator color="blue" />,
            rightIcon: (
              <Button isIconOnly color="none" size="fit">
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
          {/* TODO: Will re-open when a design for the collapsed state is found */}
          {false && (
            <Button
              isIconOnly
              color="none"
              size="fit"
              onClick={onToggleSidebar}
            >
              {isClose ? (
                <Icon icon={MdKeyboardDoubleArrowRight} />
              ) : (
                <Icon icon={MdKeyboardDoubleArrowLeft} />
              )}
            </Button>
          )}
        </Box>
        {/* Navigation */}
        <Box as="section" className="p-5">
          <Navigation
            navigationItems={ROUTINGS}
            activePath={pathname}
            isCollapse={isClose}
          />
          <Divider className="my-5" />
          <Navigation
            header={{
              title: "My Project",
              icon: (
                <Button isIconOnly color="none" size="fit">
                  <Icon icon={CiSquarePlus} size={5} />
                </Button>
              ),
            }}
            navigationItems={myProjects}
            activePath={pathname}
            isCollapse={isClose}
          />
        </Box>
      </Box>
    );
  }
);
