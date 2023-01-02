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

const ErrorIcon = {
  name: "error",
  icon: <CiWarning data-testid="icon" />,
};

export function useIcons(name: IconName, className?: string) {
  let chosen = iconsList.find((icon) => icon.name === name);

  if (!chosen) {
    chosen = ErrorIcon;
  }

  return cloneElement(chosen.icon, {
    className: className ? className : "text-light-gray mx-1",
  });
}
