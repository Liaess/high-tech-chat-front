import Header from "components/header";
import Navbar from "components/navbar";
import ChatSelectors from "components/chatSelectors";
import Chat from "components/chat";
import Users from "components/users";

export default function Home(): JSX.Element {
	return (
		<div className="min-h-screen pl-16 flex">
			<Header />
			<Navbar />
			<ChatSelectors />
			<Chat />
			<Users />
		</div>
	);
}
