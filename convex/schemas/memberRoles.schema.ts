import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const member_roles = defineTable({
  name: v.string(),
  description: v.optional(v.string()),
  permissions: v.array(v.string()),
});
