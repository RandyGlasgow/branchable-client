"use client";
import { Button } from '@/components/core/Button';
import { SignInButton } from '@clerk/nextjs';

export default function SignUp() {
  return (
    <div>
      <Button>
        <SignInButton />
      </Button>
    </div>
  );
}
