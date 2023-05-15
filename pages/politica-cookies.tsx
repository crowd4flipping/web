import { PageLayout } from "@/components/layouts/PageLayout";
import { CookiesPolicyPage } from "@/components/sections/legal/CookiesPolicyPage";

export default function CookiesPolicy() {
  return (
    <PageLayout fixedNavBar>
      <CookiesPolicyPage />
    </PageLayout>
  );
}
