const navBarLabels = ["Sobre nosotros", "Blog", "FAQs", "Acceder"] as const;

export type NavBarLabel = (typeof navBarLabels)[number];

export type NavBarSection = {
  label: NavBarLabel;
  id?: string;
  href?: string;
};
