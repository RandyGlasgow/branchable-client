import { authMiddleware } from '@clerk/nextjs';

import { publicRoutes } from './constants/publicRoutes';

export default authMiddleware({
  publicRoutes,
  signInUrl: "/auth/login",
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
