import { AvatarButton } from "../AvatarButton/AvatarButton";
import { LoginButton } from "./LoginButton";

export const NavigationBar = () => {
  return (
    <nav className="bg-inherit text-inherit dark:bg-inherit dark:text-inherit flex justify-end py-2 items-center gap-2">
      <AvatarButton />
      <LoginButton />
    </nav>
  );
};
