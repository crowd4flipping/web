import { PageLayout } from "@/components/layouts/PageLayout";
import { HeroSection } from "./hero/HeroSection";
import { ProjectsSection } from "./home-projects/ProjectsSection";
import { GetTheMostForYourMoneySection } from "./the-most-for-money/GetTheMostForYourMoneySection";
import { ColaborativeInvestmentSection } from "./colaborative-investment/ColaborativeInvestmentSection";
import { InvestFromFiftyEur } from "./bottom-section/InvestFromFiftyEur";
import { MainPainPoints } from "./bottom-section/MainPainPoints";
import { KnowTheProjectStatus } from "./bottom-section/KnowTheProjectStatus";
import { FAQs } from "./FAQs/FAQs";
import { OpinionsHabitissimo } from "./opinions/OpinionsHabitissimo";
import { ContactForm } from "./bottom-section/ContactForm";
import styles from "@/components/layouts/styles/PageLayout.module.scss";
import Head from "next/head";
import { OpinionsTrustpilot } from "./opinions/OpinionsTrustpilot";
import { ProjectData } from "../projects-page/sections/types/types";

export const HomePage = ({ projects }: { projects: ProjectData[] }) => {
  return (
    <>
      <Head>
        <title>Crowd4Flipping | Plataforma de crowdlending inmobiliario</title>
        <meta
          name="description"
          content={`Participa en proyectos inmobiliarios a través de nuestra plataforma de crowdlending desde 500€. 
          Obtén rentabilidad y diversifica tus inversiones en bienes raíces.`}
        />
      </Head>
      <PageLayout fixedNavBar>
        <HeroSection />
        <ProjectsSection projects={projects} />
        <GetTheMostForYourMoneySection />
        <ColaborativeInvestmentSection />
        <div
          className={styles.pageLayout_heroPageBottomSection}
          id="info-section"
        >
          <InvestFromFiftyEur />
          <MainPainPoints />
          <KnowTheProjectStatus />
          <FAQs />
        </div>
        <OpinionsHabitissimo />
        <ContactForm />
      </PageLayout>
    </>
  );
};
