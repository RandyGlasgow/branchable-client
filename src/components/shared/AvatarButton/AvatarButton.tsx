import { useRouter } from 'next/navigation';
import { Router } from 'next/router';

import { useAuth } from '@clerk/nextjs';
import { Button, ButtonDanger, ButtonNeutral } from '@components/core/button/Button';
import { CheckboxItem } from '@components/core/dropdown/CheckboxItem';
import { Dropdown } from '@components/core/dropdown/Dropdown';
import { DropdownItem } from '@components/core/dropdown/DropdownItem';
import { BranchCollectionsLink } from '@components/shared/Links';
import { DropdownMenuItem, Trigger } from '@radix-ui/react-dropdown-menu';
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
            <DropdownMenuItem key={"profile"}>
              <ButtonNeutral className="w-full justify-between py-1 bg-inherit border-none">
                Profile
              </ButtonNeutral>
            </DropdownMenuItem>,

            <BranchCollectionsLink key={"branch"}>
              <DropdownMenuItem>
                <ButtonNeutral className="w-full justify-between py-1 bg-inherit border-none">
                  Branch Collections <CodeIcon />
                </ButtonNeutral>
              </DropdownMenuItem>
            </BranchCollectionsLink>,
          ],
        },
        {
          divider: true,
          items: [
            <DropdownMenuItem key={"logout"} asChild>
              <ButtonDanger
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                className="w-full justify-between py-1"
              >
                Logout <ExitIcon />
              </ButtonDanger>
            </DropdownMenuItem>,
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
