import React, { FC, ReactNode } from 'react';

import * as DropdownComponents from '@radix-ui/react-dropdown-menu';

type DropdownGroups = {
  label?: string;
  divider?: boolean;
  items: ReactNode[];
};

type DropdownProps = {
  trigger: React.ReactNode;
  groups: DropdownGroups[];
  align?: "start" | "end" | "center";
  side?: "left" | "right" | "top" | "bottom";
};
export const Dropdown: FC<DropdownProps> = ({
  trigger,
  groups,
  ...rest
}) => {
  return (
    <DropdownComponents.Root>
      {trigger}
      <DropdownComponents.Portal>
        <DropdownComponents.Content
          sideOffset={5}
          className="min-w-44 shadow-lg border border-zinc-200 p-1 rounded bg-zinc-100 bg-opacity-60 backdrop-blur-sm"
          {...rest}
        >
          {groups.map((group, index) => (
            <DropdownComponents.Group
              key={index}
              className="flex flex-col"
            >
              {group.divider && (
                <DropdownComponents.Separator className="my-1 border-t border-zinc-300" />
              )}
              {group.label && group.items.length > 0 && (
                <DropdownComponents.Label className="px-1 pb-1 text-sm font-semibold">
                  {group.label}
                </DropdownComponents.Label>
              )}
              {group.items.map((item) => item)}
            </DropdownComponents.Group>
          ))}
        </DropdownComponents.Content>
      </DropdownComponents.Portal>
    </DropdownComponents.Root>
  );
};
