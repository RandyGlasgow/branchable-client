import React, { FC, ReactNode } from "react";

import * as DropdownComponents from "@radix-ui/react-dropdown-menu";

export type CheckboxItem = {
  text: string;
  checked?: boolean;
  icon: ReactNode;
  side?: "left" | "right";
} & Omit<DropdownComponents.DropdownMenuCheckboxItemProps, "children">;

export const CheckboxItem: FC<CheckboxItem> = (props) => {
  const {
    checked = true,
    icon,
    side = "right",
    text,
    className,
    ...rest
  } = props;
  return (
    <DropdownComponents.CheckboxItem
      checked={checked}
      {...rest}
      className={`p-1 rounded-sm transition-all duration-75 flex justify-between gap-1 outline-none cursor-pointer hover:bg-zinc-300 text-sm ${className}`}
    >
      {side === "left" && (
        <DropdownComponents.ItemIndicator className="flex items-center">
          {icon}
        </DropdownComponents.ItemIndicator>
      )}
      {text}
      {side === "right" && (
        <DropdownComponents.ItemIndicator className="flex items-center">
          {icon}
        </DropdownComponents.ItemIndicator>
      )}
    </DropdownComponents.CheckboxItem>
  );
};
