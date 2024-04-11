import { Id } from '../../_generated/dataModel';
import { AnyContext } from '../../types/AnyContext';

export const validateUserIsOwnerOfBranchCollection = async (
  ctx: AnyContext,
  userId: Id<"user">,
  organizationId: Id<"branch_collection">
) => {
  const organization = await ctx.db.get(organizationId);

  if (organization.owner !== userId) {
    throw new Error("User is not the owner of the organization");
  }
};
