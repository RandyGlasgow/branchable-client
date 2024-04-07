import { Button } from "@/components/core/button";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { useUserSettings } from "@/hooks/useUserSettings";
import { useAuth, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { Avatar } from "../Avatar/Avatar";

export const NavigationBar = () => {
  const { signOut } = useAuth();
  const userSettings = useUserSettings();
  const firstLetter = userSettings?.first_name[0].toUpperCase()!;
  const secondLetter = userSettings?.last_name[1].toUpperCase()!;
  return (
    <nav className="bg-inherit text-inherit dark:bg-inherit dark:text-inherit flex justify-end bg-red-200 py-2 items-center gap-2">
      <Avatar
        alt=""
        src={userSettings?.avatar}
        fallback={`${firstLetter}${secondLetter}`}
      />
      <Button onClick={() => signOut()}>Logout</Button>
    </nav>
  );
};
