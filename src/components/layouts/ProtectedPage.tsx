import { FC, PropsWithChildren } from "react";

import { ClerkProvider } from "@clerk/nextjs";

export const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  return <ClerkProvider afterSignInUrl="/">{children}</ClerkProvider>;
};
