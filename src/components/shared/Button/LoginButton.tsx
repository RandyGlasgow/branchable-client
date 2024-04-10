import { SignInButton } from '@clerk/nextjs';
import { Button } from '@components/core/Button';

export const LoginButton = () => {
  return (
    <SignInButton>
      <Button>Sign in</Button>
    </SignInButton>
  );
};
