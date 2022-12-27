import { ChatSelectors } from "@/components/ChatSelectors";
import { Header } from "@/components/Header";
import { Chat } from "components/Chat";
import Navbar from "components/navbar";
import Users from "components/users";

export function Home(): JSX.Element {
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
