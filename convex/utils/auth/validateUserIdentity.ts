import { AnyDataModel, GenericMutationCtx, GenericQueryCtx, UserIdentity } from 'convex/server';

import { AnyContext } from '../../types/AnyContext';

export const validateUserIdentity = async (
  ctx: AnyContext
): Promise<UserIdentity> => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Called storeUser without authentication present");
  }
  return identity;
};
