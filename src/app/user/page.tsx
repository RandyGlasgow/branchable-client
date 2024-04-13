"use client";

import { Button } from '@components/button/Button';
import { PageLayout } from '@components/layouts/Page';
import { useUserId } from '@hooks/useStoreUserEffect';

export default function UserPage() {
  const id = useUserId();
  return (
    <PageLayout>
      <h1>{id}</h1>
      <Button onClick={() => console.log("Hello")}>Click me</Button>
      <p>
        This is the user page. You can access this page only if you are
        authenticated.
      </p>
    </PageLayout>
  );
}
