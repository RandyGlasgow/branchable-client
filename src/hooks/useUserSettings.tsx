import { useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import useStoreUserEffect from "./useStoreUserEffect";

export const useUserSettings = (userId: Id<"user">) => {
  const userSettings = useQuery(
    api.users.get_user_settings,
    userId ? { id: userId } : "skip"
  );

  return userSettings;
};
