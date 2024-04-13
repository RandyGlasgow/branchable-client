import { useAuth } from '@clerk/nextjs';
import { CheckboxItem } from '@components/dropdown/CheckboxItem';
import { Dropdown } from '@components/dropdown/Dropdown';
import { DropdownItem } from '@components/dropdown/DropdownItem';
import { BranchCollectionsLink } from '@components/Links';
import { CodeIcon, ExitIcon } from '@radix-ui/react-icons';

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
              onClick={(e) => signOut()}
              icon={<ExitIcon />}
              text="Logout"
              key={"logout"}
              side={"right"}
              className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white"
            />,
          ],
        },
      ]}
      trigger={<AvatarCard />}
    />
  );
};
