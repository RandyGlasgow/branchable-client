import { useRouter } from 'next/navigation';
import { Router } from 'next/router';

import { useAuth } from '@clerk/nextjs';
import { Button } from '@components/core/button/Button';
import { CheckboxItem } from '@components/core/dropdown/CheckboxItem';
import { Dropdown } from '@components/core/dropdown/Dropdown';
import { DropdownItem } from '@components/core/dropdown/DropdownItem';
import { BranchCollectionsLink } from '@components/shared/Links';
import { Trigger } from '@radix-ui/react-dropdown-menu';
import { CodeIcon, ExitIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { AvatarCard } from './AvatarCard';

export const MenuButton = () => {
  const { signOut, isSignedIn } = useAuth();
  const router = useRouter();
  if (!isSignedIn) {
    return null;
  }

  return (
    <Dropdown
      align="end"
      side="bottom"
      groups={[
        {
          label: "Links",
          items: [
            <DropdownItem text="Account" key="1" />,
            <DropdownItem text="Settings" key="2" />,
            <BranchCollectionsLink key={"branch"}>
              <DropdownItem
                text="Branch Collections"
                icon={<CodeIcon />}
              />
            </BranchCollectionsLink>,
          ],
        },
        {
          divider: true,
          items: [
            <CheckboxItem
              onClick={(e) => {
                e.preventDefault();
                signOut();
                router.push("/");
              }}
              icon={<ExitIcon />}
              text="Logout"
              key={"logout"}
              side={"right"}
              className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white"
            />,
          ],
        },
      ]}
      trigger={
        <Trigger asChild>
          <Button>
            <HamburgerMenuIcon />
          </Button>
        </Trigger>
      }
    />
  );
};
