import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import useStoreUserEffect from "./useStoreUserEffect";

export const useUserSettings = () => {
  const userId = useStoreUserEffect();
  const userSettings = useQuery(
    api.users.get_user_settings,
    userId ? { id: userId } : "skip"
  );

  return userSettings;
};
