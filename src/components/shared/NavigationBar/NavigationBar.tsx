import Link from "next/link";
import { useMemo } from "react";

import { Button } from "@/components/core/button";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { useUserSettings } from "@/hooks/useUserSettings";
import { SignIn, useAuth } from "@clerk/nextjs";

import { Avatar } from "../Avatar/Avatar";

export const NavigationBar = () => {
  const { signOut } = useAuth();
  const userSettings = useUserSettings();

  const initials = useMemo(() => {
    if (!userSettings) return "";
    const [first] = userSettings.first_name.split(" ");
    const [second] = userSettings.last_name.split(" ");
    return `${first[0]}${second[0]}`;
  }, [userSettings]);

  return (
    <nav className="bg-inherit text-inherit dark:bg-inherit dark:text-inherit flex justify-end bg-red-200 py-2 items-center gap-2">
      {userSettings && (
        <Avatar
          alt=""
          src={userSettings?.avatar}
          fallback={`${initials}`}
        />
      )}
      <Button onClick={() => signOut()}>Logout</Button>
    </nav>
  );
};
