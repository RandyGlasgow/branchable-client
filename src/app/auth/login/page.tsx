"use client";
import { SignInButton } from '@clerk/nextjs';
import { Button } from '@components/core/Button';

export default function SignUp() {
  return (
    <div>
      <Button>
        <SignInButton />
      </Button>
    </div>
  );
}
