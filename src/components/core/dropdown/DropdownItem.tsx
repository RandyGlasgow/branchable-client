import React, { FC } from 'react';

import * as DropdownComponents from '@radix-ui/react-dropdown-menu';

export type DefaultItem = {
  text: string;
  icon?: React.ReactNode;
  side?: "left" | "right";
} & Omit<DropdownComponents.DropdownMenuItemProps, "children">;

export const DropdownItem: FC<DefaultItem> = (props) => {
  const { text, className, icon, side = "right", ...rest } = props;
  return (
    <DropdownComponents.Item
      {...rest}
      className={`px-1 rounded-sm transition-all duration-75 flex justify-between items-center gap-4 outline-none cursor-pointer hover:bg-zinc-300 py-1 text-sm ${className}`}
    >
      {icon && side === "left" && icon}
      {text}
      {icon && side === "right" && icon}
    </DropdownComponents.Item>
  );
};
