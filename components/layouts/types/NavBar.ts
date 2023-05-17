const navBarLabels = ["Sobre nosotros", "Blog", "FAQs", "Acceder", "Transparencia"] as const;

export type NavBarLabel = (typeof navBarLabels)[number];

export type NavBarSection = {
  label: NavBarLabel;
  id?: string;
  href?: string;
};
