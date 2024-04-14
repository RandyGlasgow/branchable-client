import { useAuth } from '@clerk/nextjs';
import { Button } from '@components/core/button/Button';
import * as Link from '@components/shared/Links';

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
