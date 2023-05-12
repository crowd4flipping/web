import { PageLayout } from "@/components/layouts/PageLayout";
import { LegalNoticePage } from "@/components/sections/legal/LegalNoticePage";
import { LegalSection } from "@/components/sections/legal/LegalSection";


export default function LegalNotice() {
  return (
    <PageLayout fixedNavBar>
      <LegalNoticePage/>
    </PageLayout>
  );
}
