import { ProtectedConvexPage } from "@/Layouts/ConvexPage";
import { PageLayout } from "@/Layouts/Page";
import { ProtectedPage } from "@/Layouts/ProtectedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedPage>
      <ProtectedConvexPage>{children}</ProtectedConvexPage>
    </ProtectedPage>
  );
}
