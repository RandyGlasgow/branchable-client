import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const branch_collection = defineTable({
  name: v.string(),
  description: v.string(),
  owner: v.id("user"),
}).index("by_name", ["name"]);

export const branch_collection_member = defineTable({
  branch_collection_id: v.id("branch_collection"),
  user_id: v.id("user"),
})
  .index("by_branch_collection_id", ["branch_collection_id"])
  .index("by_user_id", ["user_id"]);
