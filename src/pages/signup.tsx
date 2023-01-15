import { Register } from "@/templates/Register";
import Head from "next/head";

export default function Signup(): JSX.Element {
  return (
    <>
      <Head>
        <title>High Tech Chat - Sign Up</title>
      </Head>
      <Register />
    </>
  );
}
