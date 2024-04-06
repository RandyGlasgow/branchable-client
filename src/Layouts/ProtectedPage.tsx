import { ClerkProvider } from "@clerk/nextjs";
import { FC, PropsWithChildren } from "react";

export const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};
