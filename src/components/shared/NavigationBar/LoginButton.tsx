import { Button } from 'src/components/core/Button';
import * as Link from 'src/components/Links';

import { useAuth } from '@clerk/nextjs';

export const LoginButton = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return null;
  }

  return (
    <Link.LoginLink>
      <Button>Sign in</Button>
    </Link.LoginLink>
  );
};
