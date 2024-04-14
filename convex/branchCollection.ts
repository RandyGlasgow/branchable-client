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
    const branchCollectionId = await ctx.db.insert("branch_collection", {
      name,
      description: description,
      owner: userId,
    });
    const lookup = await ctx.db
      .query("member_roles")
      .filter((q) => q.eq(q.field("name"), "owner"))
      .first();

    if (!lookup) {
      throw new Error("Owner role not found");
    }
    // add the user as a member of the branch collection
    await ctx.db.insert("branch_collection_member", {
      branch_collection_id: branchCollectionId,
      user_id: userId,
      role: lookup._id,
      role_alias: lookup.name,
    });
    return branchCollectionId;
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

    if (!branchCollection) {
      throw new Error("Branch collection not found");
    }

    return {
      ...branchCollection,
      members: branchCollectionMembers.map((m) => m.user_id),
    };
  },
});

export const update_branch_collection = mutation({
  args: {
    branchCollectionId: v.id("branch_collection"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, { branchCollectionId, name, description }) => {
    const identity = await validateUserIdentity(ctx);

    const user = await ctx.db
      .query("user")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    await validateUserIsOwnerOfBranchCollection(
      ctx,
      user._id,
      branchCollectionId
    );

    await ctx.db.patch(branchCollectionId, {
      name,
      description,
    });
  },
});

export const delete_branch_collection = mutation({
  args: { branchCollectionId: v.id("branch_collection") },
  handler: async (ctx, { branchCollectionId }) => {
    const identity = await validateUserIdentity(ctx);

    const user = await ctx.db
      .query("user")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new Error("User not found");
    }

    await validateUserIsOwnerOfBranchCollection(
      ctx,
      user._id,
      branchCollectionId
    );

    const memberRegistrationsToDelete = await ctx.db
      .query("branch_collection_member")
      .withIndex("by_branch_collection_id", (q) =>
        q.eq("branch_collection_id", branchCollectionId)
      )
      .collect();
    await Promise.all(
      memberRegistrationsToDelete.map((m) => ctx.db.delete(m._id))
    );

    await ctx.db.delete(branchCollectionId);
  },
});
