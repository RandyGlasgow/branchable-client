import { ProtectedConvexPage } from "@/components/layouts/ConvexPage";
import { PageLayout } from "@/components/layouts/Page";
import { ProtectedPage } from "@/components/layouts/ProtectedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedPage>
      <ProtectedConvexPage>{children}</ProtectedConvexPage>
    </ProtectedPage>
  );
}
