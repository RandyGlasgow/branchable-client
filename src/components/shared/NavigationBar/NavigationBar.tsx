import { AvatarButton } from '../AvatarButton/AvatarButton';
import { LoginButton } from '../Button/LoginButton';

export const NavigationBar = () => {
  return (
    <nav className="min-h-14 flex justify-center align-middle backdrop-blur-[4px] bg-opacity-40 p-2 lg:px-0 bg-zinc-50 sticky top-0">
      <div className="w-full flex justify-end max-w-6xl">
        <AvatarButton />
        <LoginButton />
      </div>
    </nav>
  );
};
