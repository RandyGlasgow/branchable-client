import { FC } from "react";

import * as AvatarComponents from "@radix-ui/react-avatar";

type AvatarProps = {
  src?: string;
  alt: string;
  fallback: string;
  size?: number;
};
export const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  size = 10,
}) => {
  return (
    <AvatarComponents.Root
      className={`p-1 bg-slate-600 rounded-full overflow-hidden w-${size} h-${size}`}
    >
      <AvatarComponents.Fallback className="text-center w-full h-full">
        {fallback}
      </AvatarComponents.Fallback>
    </AvatarComponents.Root>
  );
};
