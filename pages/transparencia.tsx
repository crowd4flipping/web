import { PageLayout } from "@/components/layouts/PageLayout";
import { TransparencyPage } from "@/components/sections/legal/TransparencyPage";
import Head from "next/head";

export default function Transparency() {
  return (
    <>
      <Head>
        <title>
          Crowd4Flipping | Programa de transparencia: Información abierta y
          honesta
        </title>
        <meta
          name="description"
          content={`Programa de transparencia de Crowd4Flipping. 
          Información abierta y honesta sobre los proyectos inmobiliarios.`}
        />
      </Head>
      <PageLayout fixedNavBar>
        <TransparencyPage />
      </PageLayout>
    </>
  );
}
