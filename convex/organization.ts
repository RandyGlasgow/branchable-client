import exp from 'constants';
import { v } from 'convex/values';

import { mutation, query } from './_generated/server';
import { validateUserIdentity } from './utils/auth/validateUserIdentity';
import { validateUserIsOwnerOfOrganization } from './utils/auth/validateUserIsOwnerOfOrganization';

export const get_all_organizations_for_user = query({
  args: {
    user_id: v.id("user"),
  },
  handler: async (ctx, { user_id }) => {
    await validateUserIdentity(ctx);
    const organizations = await ctx.db
      .query("organization_member") // Query the organization_member table
      .withIndex("by_user_id", (q) => q.eq("user_id", user_id))
      .collect(); // Filter by user_id

    return organizations.map(
      (organization) => organization.organization_id
    );
  },
});

export const get_organization_by_id = query({
  args: {
    id: v.id("organization"),
  },
  handler: async (ctx, { id }) => {
    await validateUserIdentity(ctx);
    const organization = await ctx.db.get(id);

    return organization;
  },
});

export const create_organization = mutation({
  args: {
    name: v.string(),
    userId: v.id("user"),
  },
  handler: async (ctx, { name, userId }) => {
    await validateUserIdentity(ctx);
    const organization_id = await ctx.db.insert("organization", {
      name,
      owner: userId,
    });

    await ctx.db.insert("organization_member", {
      organization_id,
      user_id: userId,
    });

    return organization_id;
  },
});

export const update_organization = mutation({
  args: {
    organizationId: v.id("organization"),
    userId: v.id("user"),
    name: v.string(),
  },
  handler: async (ctx, { organizationId, name, userId }) => {
    await validateUserIdentity(ctx);
    await validateUserIsOwnerOfOrganization(ctx, userId, organizationId);
    await ctx.db.patch(organizationId, { name });

    return organizationId;
  },
});

export const add_user_to_organization = mutation({
  args: {
    organizationId: v.id("organization"),
    userId: v.id("user"),
  },
  handler: async (ctx, { organizationId, userId }) => {
    await validateUserIdentity(ctx);
    await validateUserIsOwnerOfOrganization(ctx, userId, organizationId);
    await ctx.db.insert("organization_member", {
      organization_id: organizationId,
      user_id: userId,
    });

    return organizationId;
  },
});

export const remove_user_from_organization = mutation({
  args: {
    organizationId: v.id("organization"),
    userId: v.id("user"),
    userIdToRemove: v.id("user"),
  },
  handler: async (ctx, { organizationId, userId }) => {
    await validateUserIdentity(ctx);
    await validateUserIsOwnerOfOrganization(ctx, userId, organizationId);

    // list of organizations the user is a member of
    const memberOrgs = await ctx.db
      .query("organization_member")
      .withIndex("by_user_id", (q) => q.eq("user_id", userId))
      .collect();

    // find the organization to remove the user from
    const foundOrganizationMember = memberOrgs.find(
      (org) => org.organization_id === organizationId
    );

    if (!foundOrganizationMember) {
      throw new Error("User is not a member of the organization");
    }

    await ctx.db.delete(foundOrganizationMember._id);
    return;
  },
});
