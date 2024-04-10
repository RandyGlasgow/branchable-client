import { Id } from '../../_generated/dataModel';
import { AnyContext } from '../../types/AnyContext';

export const validateUserIsOwnerOfOrganization = async (
  ctx: AnyContext,
  userId: Id<"user">,
  organizationId: Id<"organization">
) => {
  const organization = await ctx.db.get(organizationId);

  if (organization.owner !== userId) {
    throw new Error("User is not the owner of the organization");
  }
};
