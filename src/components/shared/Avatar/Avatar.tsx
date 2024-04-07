"use client";
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
  size = "42",
}) => {
  return (
    <AvatarComponents.Root
      className={`inline-flex items-center justify-center align-middle overflow-hidden h-${size} w-${size}`}
    >
      <AvatarComponents.Image
        src={src}
        alt={alt}
        className={`object-cover w-full h-full`}
      />
      <AvatarComponents.Fallback className="bg-blue-500">
        {fallback}
      </AvatarComponents.Fallback>
    </AvatarComponents.Root>
  );
};
