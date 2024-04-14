import { defineSchema } from 'convex/server';

import {
    branch_collection, branch_collection_branch, branch_collection_member
} from './schemas/branchCollection.schema';
import { member_roles } from './schemas/memberRoles.schema';
import { user, user_settings } from './schemas/users.schema';

export default defineSchema({
  user,
  user_settings,

  branch_collection,
  branch_collection_member,
  branch_collection_branch,

  member_roles,
});
