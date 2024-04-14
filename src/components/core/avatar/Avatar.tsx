import { FC } from 'react';

import * as AvatarComponents from '@radix-ui/react-avatar';

type AvatarProps = {
  src?: string;
  alt: string;
  fallback: string;
  size?: "small" | "medium" | "large";
};
export const Avatar: FC<AvatarProps> = ({ src, alt, fallback, size }) => {
  if (size === "small") {
    return (
      <AvatarComponents.Root className="h-8 w-8 overflow-hidden bg-zinc-500 flex justify-center items-center rounded-full outline-none">
        {src ? (
          <AvatarComponents.Image src={src} alt={alt} />
        ) : (
          <AvatarComponents.Fallback>{fallback}</AvatarComponents.Fallback>
        )}
      </AvatarComponents.Root>
    );
  }
  if (size === "medium") {
    return (
      <AvatarComponents.Root className="h-12 w-12 overflow-hidden bg-zinc-500 flex justify-center items-center rounded-full outline-none">
        {src ? (
          <AvatarComponents.Image src={src} alt={alt} />
        ) : (
          <AvatarComponents.Fallback>{fallback}</AvatarComponents.Fallback>
        )}
      </AvatarComponents.Root>
    );
  }
  return (
    <AvatarComponents.Root className="h-16 w-16 overflow-hidden bg-zinc-500 flex justify-center items-center rounded-full outline-none">
      {src ? (
        <AvatarComponents.Image src={src} alt={alt} />
      ) : (
        <AvatarComponents.Fallback>{fallback}</AvatarComponents.Fallback>
      )}
    </AvatarComponents.Root>
  );
};
