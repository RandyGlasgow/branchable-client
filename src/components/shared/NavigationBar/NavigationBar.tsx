import { Button } from "@/components/core/button";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { useAuth, SignIn } from "@clerk/nextjs";
import Link from "next/link";

export const NavigationBar = () => {
  const userId = useStoreUserEffect();
  const { signOut } = useAuth();
  return (
    <nav className="bg-inherit text-inherit dark:bg-inherit dark:text-inherit flex justify-end mt-5">
      <Button onClick={() => signOut()}>Logout</Button>
    </nav>
  );
};
