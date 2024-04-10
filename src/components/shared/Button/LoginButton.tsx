import { SignInButton, useAuth } from '@clerk/nextjs';
import { Button } from '@components/core/Button';

export const LoginButton = () => {
  const { isSignedIn } = useAuth();
  if (isSignedIn) return null;

  return (
    <SignInButton>
      <Button>Sign in</Button>
    </SignInButton>
  );
};