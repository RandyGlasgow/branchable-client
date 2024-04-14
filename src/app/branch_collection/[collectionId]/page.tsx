"use client";
import { useQuery } from 'convex/react';
import { PageConfig } from 'next';
import { usePathname, useSearchParams } from 'next/navigation';

import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { PageLayout } from '@components/layouts/Page';
import {
    OwnerSettings
} from '@components/pages/branch_collection_single/dialogs/OwnerSettings/OwnerSettings';
import { useGetBranchCollection } from '@hooks/queries/useGetBranchCollection';

import { PageProps } from '../../../../.next/types/app/layout';
import { Id } from '../../../../convex/_generated/dataModel';

export default function BranchCollectionPage({ params }: PageProps) {
  const collection = useGetBranchCollection(
    params.collectionId as Id<"branch_collection">
  );
  return (
    <PageLayout>
      <Card>
        <CardContent>
          <CardHeader
            right={collection && <OwnerSettings collection={collection} />}
          >
            <h1>Collection: {collection?.name}</h1>
          </CardHeader>
          {JSON.stringify(params, null, 2)}
        </CardContent>
      </Card>
    </PageLayout>
  );
}
