import {
  AnyDataModel,
  GenericMutationCtx,
  GenericQueryCtx,
  UserIdentity,
} from "convex/server";

type CTX = GenericMutationCtx<AnyDataModel> | GenericQueryCtx<any>;
export const validateUserIdentity = async (ctx: CTX): Promise<UserIdentity> => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Called storeUser without authentication present");
  }
  return identity;
};
