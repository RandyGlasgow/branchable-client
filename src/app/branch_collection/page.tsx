import { CollectionGrid } from 'pages/branch_collections/CollectionGrid/CollectionGrid';

import { PageLayout } from '@components/layouts/Page';

export default function BranchCollectionsPage() {
  return (
    <PageLayout>
      <h1>Your Branch Collections</h1>
      <p>These are the collections that you own or have access to.</p>
      <CollectionGrid />
    </PageLayout>
  );
}
