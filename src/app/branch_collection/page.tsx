import {
    BranchCollection
} from '@components/BranchCollection/BranchCollectionGrid/BranchCollection';
import { PageLayout } from '@components/layouts/Page';

export default function BranchCollectionsPage() {
  return (
    <PageLayout>
      <h1>Branch Collections</h1>
      <p>
        This is the organization page. You can access this page only if you
        are authenticated.
      </p>
      <BranchCollection />
    </PageLayout>
  );
}
