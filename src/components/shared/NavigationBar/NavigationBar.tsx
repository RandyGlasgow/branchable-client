"use client";
import { AvatarButton } from '../AvatarButton/AvatarButton';
import { LoginButton } from '../Button/LoginButton';

export const NavigationBar = () => {
  return (
    <nav className="sticky top-0 bg-zinc-100 min-h-11">
      <div className="w-full flex justify-end max-w-6xl">
        <AvatarButton />
        <LoginButton />
      </div>
    </nav>
  );
};
