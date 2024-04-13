"use client";
import { OwnerSettings } from 'pages/branch_collection_single/dialogs/OwnerSettings/OwnerSettings';

import { Card } from '@components/card/Card';
import { CardContent } from '@components/card/CardContetn';
import { CardHeader } from '@components/card/CardHeader';
import { PageLayout } from '@components/layouts/Page';
import { useGetBranchCollection } from '@hooks/queries/useGetBranchCollection';

import { PageProps } from '../../../../.next/types/app/layout';

export default function BranchCollectionPage({
  params: { id },
}: PageProps) {
  const collection = useGetBranchCollection(id);
  return (
    <PageLayout>
      <Card>
        <CardContent>
          <CardHeader right={<OwnerSettings id={id} />}>
            <h1>Collection: {collection?.name}</h1>
          </CardHeader>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
