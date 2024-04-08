import React, { FC } from "react";

import * as DropdownComponents from "@radix-ui/react-dropdown-menu";

export type DefaultItem = { text: string } & Omit<
  DropdownComponents.DropdownMenuItemProps,
  "children"
>;

export const DropdownItem: FC<DefaultItem> = (props) => {
  const { text, className, ...rest } = props;
  return (
    <DropdownComponents.Item
      {...rest}
      className={`px-1 rounded-sm transition-all duration-75 flex justify-between gap-1 outline-none cursor-pointer hover:bg-zinc-300 py-1 text-sm ${className}`}
    >
      {text}
    </DropdownComponents.Item>
  );
};
