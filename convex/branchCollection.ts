import exp from 'constants';
import { v } from 'convex/values';

import { mutation, query } from './_generated/server';
import { validateUserIdentity } from './utils/auth/validateUserIdentity';
import {
    validateUserIsOwnerOfBranchCollection
} from './utils/auth/validateUserIsOwnerOfOrganization';

export const create_branch_collection = mutation({
  args: { name: v.string(), description: v.optional(v.string()) },
  handler: async (ctx, { name, description = "" }) => {
    const identity = await validateUserIdentity(ctx);

    // look up the user from the db to get their id
    const user = await ctx.db
      .query("user")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    const userId = user?._id!;
    // create the branch collection
    const branchCollection = await ctx.db.insert("branch_collection", {
      name,
      description: description,
      owner: userId,
    });
    const lookup = await ctx.db
      .query("member_roles")
      .filter((q) => q.eq(q.field("name"), "owner"))
      .unique();
    // add the user as a member of the branch collection
    await ctx.db.insert("branch_collection_member", {
      branch_collection_id: branchCollection,
      user_id: userId,
      role: lookup!._id,
      role_alias: lookup!.name,
    });
    return branchCollection;
  },
});

export const get_all_branch_collections = query({
  args: { userId: v.id("user") },
  handler: async (ctx, { userId }) => {
    await validateUserIdentity(ctx);

    // get all branch collections that the user is a member of
    const owned = await ctx.db
      .query("branch_collection")
      .filter((q) => q.eq(q.field("owner"), userId))
      .collect();

    return owned;
  },
});

export const get_branch_collection = query({
  args: { branchCollectionId: v.id("branch_collection") },
  handler: async (ctx, { branchCollectionId }) => {
    await validateUserIdentity(ctx);

    const branchCollection = await ctx.db.get(branchCollectionId);
    const branchCollectionMembers = await ctx.db
      .query("branch_collection_member")
      .withIndex("by_branch_collection_id", (q) =>
        q.eq("branch_collection_id", branchCollectionId)
      )
      .collect();

    return {
      ...branchCollection,
      members: branchCollectionMembers.map((m) => m.user_id),
    };
  },
});
