import { defineTable } from 'convex/server';
import { v } from 'convex/values';

import { BranchStates } from '../constants/branchStates';

export const branch_collection = defineTable({
  name: v.string(),
  description: v.string(),
  owner: v.id("user"),
}).index("by_name", ["name"]);

export const branch_collection_member = defineTable({
  branch_collection_id: v.id("branch_collection"),
  user_id: v.id("user"),
  role: v.id("member_roles"),
  role_alias: v.string(),
})
  .index("by_branch_collection_id", ["branch_collection_id"])
  .index("by_user_id", ["user_id"]);

export const branch_collection_branch = defineTable({
  name: v.string(),
  branch_collection_id: v.id("branch_collection"),
  used_by: v.id("user"),
  // date started
  date_started: v.string(),
  // date ended
  date_ended: v.string(),

  state: v.union(
    v.literal(BranchStates.ACTIVE),
    v.literal(BranchStates.INACTIVE),
    v.literal(BranchStates.AVAILABLE)
  ),
}).index("by_branch_collection_id", ["branch_collection_id"]);
