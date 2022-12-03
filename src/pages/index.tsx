import Header from "components/header";
import Navbar from "components/navbar";
import ChatSelectors from "components/chatSelectors";
// import Chat from "components/chat";

export default function Home(): JSX.Element {
	return (
    <div className="bg-slate-500 min-h-screen">
      <Header/>
      <Navbar/>
      <ChatSelectors/>
    </div>
  )
}
