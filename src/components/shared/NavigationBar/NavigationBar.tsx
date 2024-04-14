"use client";
import { MenuButton } from '../AvatarButton/AvatarButton';
import { LoginButton } from '../Button/LoginButton';

export const NavigationBar = () => {
  return (
    <nav className="sticky top-0 min-h-11 flex justify-center">
      <div className="w-full flex justify-end items-center max-w-6xl px-2 lg:px-0">
        <MenuButton />
        <LoginButton />
      </div>
    </nav>
  );
};
