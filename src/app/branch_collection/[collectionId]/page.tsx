"use client";
import { useQuery } from 'convex/react';
import { PageConfig } from 'next';
import { usePathname, useSearchParams } from 'next/navigation';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { PageLayout } from '@components/layouts/Page';
import {
    AddNewBranch
} from '@components/pages/branch_collection_single/dialogs/AddNewBranch/AddNewBranch';
import {
    OwnerSettings
} from '@components/pages/branch_collection_single/dialogs/OwnerSettings/OwnerSettings';
import { useGetBranchCollection } from '@hooks/queries/useGetBranchCollection';
import { useUserId } from '@hooks/useStoreUserEffect';

import { PageProps } from '../../../../.next/types/app/layout';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

export default function BranchCollectionPage({ params }: PageProps) {
  const collection = useGetBranchCollection(
    params.collectionId as Id<"branch_collection">
  );
  const userId = useUserId();

  const collectionBranches = useQuery(
    api.branchCollection.get_branches_for_collection,
    userId && params.collectionId
      ? {
          branchCollectionId: params.collectionId,
        }
      : "skip"
  );

  const isOwner = collection?.owner === userId;
  return (
    <PageLayout>
      <div className="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2">
        <Card className="col-span-full">
          <CardContent>
            <CardHeader
              right={
                collection && <OwnerSettings collection={collection} />
              }
            >
              <h1>Collection: {collection?.name}</h1>
            </CardHeader>
            {JSON.stringify(params, null, 2)}
          </CardContent>
        </Card>
        {JSON.stringify(collectionBranches, null, 2)}

        {isOwner && <AddNewBranch collection={collection} />}
      </div>
    </PageLayout>
  );
}
