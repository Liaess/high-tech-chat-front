import { FiMinus } from "react-icons/fi";
import { BiWindow } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { cloneElement } from "react";

type IconName = "minus" | "window" | "close" | string;

export const iconsList = [
  {
    name: "minus",
    icon: <FiMinus data-testid="icon" />,
  },
  {
    name: "window",
    icon: <BiWindow data-testid="icon" />,
  },
  {
    name: "close",
    icon: <IoMdClose data-testid="icon" />,
  },
];

export const ErrorIcon = (
  <CiWarning className="text-light-gray mx-1" data-testid="icon" />
);

export function useIcons(name: IconName, className?: string) {
  const chosen = iconsList.find((icon) => icon.name === name);

  if (!chosen) {
    return ErrorIcon;
  }

  return cloneElement(chosen.icon, {
    className: className,
  });
}
