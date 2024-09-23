import React, { memo } from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

// UI
import { User, Box, Button, Icon } from "@app/ui";
// Constants
import { ColorType, SizeType } from "@app/constants";

export const Header = memo(() => (
  <Box
    as="header"
    className="h-[70px] flex-1 flex items-center px-10 border-b-1 border-gray-medium"
  >
    <Input
      classNames={{
        base: "w-[417px]",
        inputWrapper: "rounded-md bg-gray-light",
        input: "text-sm text-gray-dark",
      }}
      placeholder="Search for anything..."
      startContent={
        <Button isIconOnly size={SizeType.FIT} color={ColorType.TRANSPARENT}>
          <Icon icon={CiSearch} />
        </Button>
      }
    />
    <Box className="flex-1 flex justify-end gap-6">
      <Box className="flex items-center gap-3">
        <Button size={SizeType.FIT} color={ColorType.TRANSPARENT} isIconOnly>
          <Icon icon={IoCalendarOutline} />
        </Button>
        <Button size={SizeType.FIT} color={ColorType.TRANSPARENT} isIconOnly>
          <Icon icon={IoIosHelpCircleOutline} />
        </Button>
        <Button size={SizeType.FIT} color={ColorType.TRANSPARENT} isIconOnly>
          <Icon icon={CiBellOn} />
        </Button>
      </Box>
      <User
        userImage="https://avatars.githubusercontent.com/u/30373425?v=4"
        username="Junior Garcia"
        location="U.P, India"
      />
    </Box>
  </Box>
));

Header.displayName = "Header";
