import Image from "next/image";

export default function Navbar(): JSX.Element {
	return (
		<div className="bg-app-borders w-20 min-h-screen flex flex-col items-center fixed left-0 top-0 z-10">
      <h1 className="text-light-gray text-xs py-1"> Discord </h1>
			<div className="border-b border-gray-500">
				<div className="bg-user-color w-14 h-14 rounded-full flex justify-center my-3">
					<Image
						className="object-contain"
						width={35}
						height={35}
						src="/assets/discord-logo.png"
						alt="logo"
					/>
				</div>
			</div>
		</div>
	);
}
