import { PageLayout } from '@components/layouts/Page';

export default function OrganizationPage() {
  return (
    <PageLayout>
      <h1>Organization</h1>
      <p>
        This is the organization page. You can access this page only if you
        are authenticated.
      </p>
    </PageLayout>
  );
}
