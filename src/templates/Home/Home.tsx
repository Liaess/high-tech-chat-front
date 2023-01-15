import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Chat } from "@/components/Chat";
import { UsersInServer } from "@/components/UsersInServer";
import { Channels } from "@/components/Channels";

export function Home(): JSX.Element {
  return (
    <div className="min-h-screen flex pt-5 ml-16 bg-fourth-color-palette">
      <Header />
      <Navbar />
      <Channels />
      <Chat />
      <UsersInServer />
    </div>
  );
}
