import { ChatSelectors } from "@/components/ChatSelectors";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Users } from "@/components/Users";
import { Chat } from "@/components/Chat";

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
