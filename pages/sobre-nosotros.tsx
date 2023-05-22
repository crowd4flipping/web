import React from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { AboutUsHeroSection } from "@/components/sections/about-us/AboutUsHeroSection";
import { OurGoal } from "@/components/sections/about-us/OurGoal";
import { TeamProfiles } from "@/components/sections/about-us/TeamProfiles";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>
          Crowd4Flipping | Conoce al equipo humano de Crowd4Flipping
        </title>
        <meta
          name="description"
          content={`Crowd4Flipping: Plataforma de crowdlending inmobiliario. 
          Conoce a nuestro equipo experto y únete al crecimiento del mercado.`}
        />
      </Head>
      <PageLayout>
        <AboutUsHeroSection />
        <OurGoal />
        <TeamProfiles />
      </PageLayout>
    </>
  );
}
