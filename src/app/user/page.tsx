"use client";

import { Button } from 'src/components/core/Button';
import { PageLayout } from 'src/components/layouts/Page';
import useStoreUserEffect from 'src/hooks/useStoreUserEffect';

export default function UserPage() {
  const id = useStoreUserEffect();
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
