import React from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { AboutUsHeroSection } from "@/components/sections/about-us/AboutUsHeroSection";
import { OurGoal } from "@/components/sections/about-us/OurGoal";
import { TeamProfiles } from "@/components/sections/about-us/TeamProfiles";

export default function AboutUs() {
  return (
    <PageLayout>
      <AboutUsHeroSection />
      <OurGoal />
      <TeamProfiles />
    </PageLayout>
  );
}
