import { Id } from '../../_generated/dataModel';
import { AnyContext } from '../../types/AnyContext';

export const validateUserIsOwnerOfBranchCollection = async (
  ctx: AnyContext,
  userId: Id<"user">,
  branchCollectionId: Id<"branch_collection">
) => {
  const branchCollection = await ctx.db.get(branchCollectionId);

  if (branchCollection.owner !== userId) {
    throw new Error("User is not the owner of the organization");
  }
};
