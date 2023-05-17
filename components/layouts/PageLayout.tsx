import { ReactElement, useState } from "react";
import { DesktopNavBar } from "../navbars/DesktopNavBar";
import styles from "./styles/PageLayout.module.scss";
import { AnimatedMobileNavBar } from "../navbars/AnimatedMobileNavBar";
import { NavBarSection } from "./types/NavBar";
import { Route } from "routes/Routes";
import { Footer } from "../navbars/Footer";

const navBarSections: NavBarSection[] = [
  {
    label: "Transparencia",
    href: "/transparencia",
  },
  {
    label: "Sobre nosotros",
    href: "/sobre-nosotros",
  },
  {
    label: "FAQs",
    href: "/#faqs",
    id: "#faqs",
  },
  {
    label: "Acceder",
    href: Route().site.c4f_app.host + "/?fw",
  },
];

export const PageLayout = ({
  children,
  fixedNavBar = false,
}: {
  fixedNavBar?: boolean;
  children: ReactElement | ReactElement[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!isOpen && (
        <DesktopNavBar
          isFixed={fixedNavBar}
          navBarSections={navBarSections}
          setIsOpen={setIsOpen}
        />
      )}
      <AnimatedMobileNavBar
        navBarSections={navBarSections}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <main className={styles.pageLayout}>{children}</main>
      <Footer></Footer>
    </>
  );
};
