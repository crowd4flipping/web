import { PageLayout } from "@/components/layouts/PageLayout";
import { HeroSection } from "./hero/HeroSection";
import { ProjectsSection } from "./home-projects/ProjectsSection";
import { GetTheMostForYourMoneySection } from "./the-most-for-money/GetTheMostForYourMoneySection";
import { ColaborativeInvestmentSection } from "./colaborative-investment/ColaborativeInvestmentSection";
import { InvestFromFiftyEur } from "./bottom-section/InvestFromFiftyEur";
import { MainPainPoints } from "./bottom-section/MainPainPoints";
import { TeamExperience } from "./bottom-section/TeamExperience";
import { FAQs } from "./FAQs/FAQs";
import { Opinions } from "./opinions/Opinions";
import { ContactForm } from "./bottom-section/ContactForm";
import styles from "@/components/layouts/styles/PageLayout.module.scss";

export const HomePage = () => {
  return (
    <PageLayout fixedNavBar>
      <HeroSection />
      <ProjectsSection />
      <GetTheMostForYourMoneySection />
      <ColaborativeInvestmentSection />
      <div className={styles.pageLayout_heroPageBottomSection}>
        <InvestFromFiftyEur />
        <MainPainPoints />
        <TeamExperience />
        <FAQs />
      </div>
      <Opinions />
      <ContactForm />
    </PageLayout>
  );
};
