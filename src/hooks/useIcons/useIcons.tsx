import { FiMinus } from "react-icons/fi";
import { BiWindow } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export function useIcons() {
  return {
    minus: <FiMinus />,
    window: <BiWindow />,
    close: <IoMdClose />,
  };
}
