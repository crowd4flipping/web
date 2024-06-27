import { ReactElement } from "react";

const navBarLabels = [
  "Blog",
  "FAQs",
  "Regístrate",
  "Acceder",
  "Transparencia",
  "Proyectos",
] as const;

export type NavBarLabel = (typeof navBarLabels)[number];

export type NavBarSection = {
  label: NavBarLabel;
  icon: ReactElement;
  id?: string;
  href?: string;
};