import { defineSchema } from 'convex/server';

import { organization, organization_member } from './schemas/organization.schema';
import { user, user_settings } from './schemas/users.schema';

export default defineSchema({
  user,
  user_settings,

  organization,
  organization_member,
});
