"use client";

import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { Button } from "@/components/core/button";
import { PageLayout } from "@/components/layouts/Page";

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
