import { FiMinus } from "react-icons/fi"
import { BiWindows } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

export default function Header(): JSX.Element {
	return (
		<div className="bg-app-borders w-full h-5 flex justify-end items-center fixed left-0 top-0 z-9">
            <FiMinus className="text-light-gray mx-1"/>
            <BiWindows className="text-light-gray mx-1"/>
            <IoMdClose className="text-light-gray mx-1"/>
		</div>
	);
}
