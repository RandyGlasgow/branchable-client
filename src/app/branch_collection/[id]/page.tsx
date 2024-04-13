"use client";
import { useQuery } from 'convex/react';
import { use } from 'react';

import { PageLayout } from '@components/layouts/Page';
import { useUserId } from '@hooks/useStoreUserEffect';

import { PageProps } from '../../../../.next/types/app/layout';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

export default function BranchCollectionPage({
  params: { id },
}: PageProps) {
  const userId = useUserId();
  const collection = useQuery(
    api.branchCollection.get_branch_collection,
    userId ? { branchCollectionId: id } : "skip"
  );
  return (
    <PageLayout>
      <h1>Collection: {collection?.name}</h1>

      <div>{JSON.stringify(collection, null, 2)}</div>
    </PageLayout>
  );
}
