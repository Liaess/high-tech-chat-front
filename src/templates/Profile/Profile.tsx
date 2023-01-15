import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";

export function Profile(): JSX.Element {
  return (
    <div className="min-h-screen bg-fourth-color-palette">
      <Header />
      <UserProfile />
    </div>
  );
}
