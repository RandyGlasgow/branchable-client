import { AnyDataModel, GenericMutationCtx, GenericQueryCtx } from 'convex/server';

export type AnyContext =
  | GenericMutationCtx<AnyDataModel>
  | GenericQueryCtx<any>;
