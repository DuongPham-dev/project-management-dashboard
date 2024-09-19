import { IconType } from "react-icons";

export interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

export const Icon = ({
  icon: Component,
  size = 6,
  color = "text-gray-dark",
}: IconProps) => <Component className={`w-${size} h-${size} ${color}`} />;
