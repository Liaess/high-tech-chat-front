import Image from "next/image";

export default function Navbar(): JSX.Element {
	return (
		<div className="bg-first-color-palette w-16 min-h-screen flex flex-col items-center fixed left-0 top-0 z-10">
			<h1 className="text-light-gray text-xs py-1"> TechChat </h1>
			<div className="border-b border-gray-500">
				<div className="bg-user-color w-11 h-11 rounded-full flex justify-center mt-1 mb-3">
					<Image
						className="object-contain"
						width={30}
						height={30}
						src="/assets/discord-logo.png"
						alt="logo"
					/>
				</div>
			</div>
		</div>
	);
}
