import { TbCategory } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { Button } from "@nextui-org/button";

// UI
import { NavigationHeader, NavigationItem } from "@app/ui";
// Constants
import { ROUTER } from "@app/constants";

export const ROUTING_HEADER: NavigationHeader = {
  title: "My Project",
  icon: (
    <Button isIconOnly className="w-fit h-fit p-0 min-w-0 bg-transparent">
      <CiSquarePlus className="w-4 h-4" />
    </Button>
  ),
};

export const ROUTINGS: NavigationItem[] = [
  {
    id: 1,
    label: "home",
    href: ROUTER.ROOT,
    leftIcon: <TbCategory className="w-6 h-6" />,
    rightIcon: <TbCategory className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "messages",
    href: ROUTER.MESSAGES,
    leftIcon: <AiOutlineMessage className="w-6 h-6" />,
    rightIcon: <TbCategory className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "tasks",
    href: ROUTER.TASKS,
    leftIcon: <FaTasks className="w-6 h-6" />,
    rightIcon: <TbCategory className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "members",
    href: ROUTER.MEMBERS,
    leftIcon: <LuUsers className="w-6 h-6" />,
    rightIcon: <TbCategory className="w-6 h-6" />,
  },
  {
    id: 5,
    label: "settings",
    href: ROUTER.SETTINGS,
    leftIcon: <AiOutlineSetting className="w-6 h-6" />,
    rightIcon: <TbCategory className="w-6 h-6" />,
  },
];
