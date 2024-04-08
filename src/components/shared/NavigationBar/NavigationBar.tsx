import Link from "next/link";
import { useMemo } from "react";

import { Avatar } from "@/components/core/avatar/Avatar";
import { CheckboxItem } from "@/components/core/dropdown/CheckboxItem";
import { Dropdown } from "@/components/core/dropdown/Dropdown";
import { DropdownItem } from "@/components/core/dropdown/DropdownItem";
import { useUserSettings } from "@/hooks/useUserSettings";
import { useAuth } from "@clerk/nextjs";
import { ExitIcon } from "@radix-ui/react-icons";

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
    <nav className="bg-inherit text-inherit dark:bg-inherit dark:text-inherit flex justify-end py-2 items-center gap-2">
      {userSettings && (
        <Dropdown
          align="end"
          groups={[
            {
              label: "Links",
              items: [
                <Link href="/account" key={"account"}>
                  <DropdownItem text="Account" />
                </Link>,
                <Link href="/settings" key={"settings"}>
                  <DropdownItem text="Settings" />
                </Link>,
                <Link href="/organizations" key="organizations">
                  <DropdownItem text="Organizations" />
                </Link>,
              ],
            },
            {
              divider: true,
              items: [
                <CheckboxItem
                  onClick={(e) => signOut()}
                  icon={<ExitIcon />}
                  text="Logout"
                  key={"logout"}
                  side={"right"}
                  className="hover:text-red-500 hover:bg-red-100"
                />,
              ],
            },
          ]}
          trigger={
            <Avatar
              alt={userSettings.first_name}
              size="small"
              src={userSettings?.avatar}
              fallback={`${initials}`}
            />
          }
        />
      )}
    </nav>
  );
};
