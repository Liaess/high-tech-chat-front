import { Login } from "@/templates/Login";
import Head from "next/head";

export default function Signin(): JSX.Element {
  return (
    <>
      <Head>
        <title>High Tech Chat - Sign In</title>
      </Head>
      <Login />
    </>
  );
}
