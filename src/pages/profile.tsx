import { Profile } from "@/templates/Profile";
import Head from "next/head";

export default function ProfilePage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>High Tech Chat - Profile</title>
      </Head>
      <Profile />
    </div>
  );
}
