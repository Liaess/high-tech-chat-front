import { Home } from "@/templates/Home";
import Head from "next/head";

export default function Main(): JSX.Element {
  return (
    <>
      <Head>
        <title>High Tech Chat</title>
      </Head>
      <Home />
    </>
  );
}
