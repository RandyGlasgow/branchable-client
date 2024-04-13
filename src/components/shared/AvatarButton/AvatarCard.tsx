import { Avatar } from '@components/avatar/Avatar';
import useStoreUserEffect from '@hooks/useStoreUserEffect';
import { useUserSettings } from '@hooks/useUserSettings';
import { Trigger } from '@radix-ui/react-dropdown-menu';

export const AvatarCard = () => {
  const userId = useStoreUserEffect();
  const userSettings = useUserSettings(userId!);

  const firstLetter = userSettings?.first_name[0] || "";
  const secondLetter = userSettings?.last_name[0] || "";
  const initials = `${firstLetter}${secondLetter}`.toLocaleUpperCase();

  if (!userId) return null;
  return (
    <Trigger className="flex items-center gap-2 border border-zinc-300 shadow p-1 rounded bg-zinc-50">
      <Avatar
        alt="user"
        size="small"
        src={userSettings?.avatar}
        fallback={`${initials}`}
      />

      {userSettings?.first_name}
    </Trigger>
  );
};
{
  /* <Avatar
alt="user"
size="small"
src={userSettings?.avatar}
fallback={`${initials}`}
/> */
}
