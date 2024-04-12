import {
    BranchCollection
} from '@components/BranchCollection/BranchCollectionGrid/BranchCollection';
import { PageLayout } from '@components/layouts/Page';

export default function BranchCollectionPage() {
  return (
    <PageLayout>
      <h1>Branch Page</h1>
      <p>
        This is the organization page. You can access this page only if you
        are authenticated.
      </p>
    </PageLayout>
  );
}
