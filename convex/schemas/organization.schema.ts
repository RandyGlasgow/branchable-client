import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const organization = defineTable({
  name: v.string(),
  owner: v.id("user"),
}).index("by_name", ["name"]);

export const organization_member = defineTable({
  organization_id: v.id("organization"),
  user_id: v.id("user"),
})
  .index("by_organization_id", ["organization_id"])
  .index("by_user_id", ["user_id"]);
