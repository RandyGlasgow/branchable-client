"use client";
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@clerk/nextjs';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ProtectedConvexPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
};
