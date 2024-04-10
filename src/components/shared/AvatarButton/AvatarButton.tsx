import Link from 'next/link';
import { CheckboxItem } from 'src/components/core/dropdown/CheckboxItem';
import { Dropdown } from 'src/components/core/dropdown/Dropdown';
import { DropdownItem } from 'src/components/core/dropdown/DropdownItem';

import { useAuth } from '@clerk/nextjs';
import { ExitIcon } from '@radix-ui/react-icons';

import { AvatarCard } from './AvatarCard';

export const AvatarButton = () => {
  const { signOut, isSignedIn } = useAuth();

  if (!isSignedIn) {
    return null;
  }

  return (
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
      trigger={<AvatarCard />}
    />
  );
};
