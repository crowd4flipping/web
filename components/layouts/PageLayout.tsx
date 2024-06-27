import { ReactElement, useState } from "react";
import { DesktopNavBar } from "../navbars/DesktopNavBar";
import styles from "./styles/PageLayout.module.scss";
import { AnimatedMobileNavBar } from "../navbars/AnimatedMobileNavBar";
import { NavBarSection } from "./types/NavBar";
import { Routes } from "routes/Routes";
import { Footer } from "../navbars/Footer";
import { WhatsAppButton } from "@/components/buttons/WhatsAppButton";
import { useBreakPoints } from "../hooks/useBreakPoints";
import { TeamIcon } from "../icons/TeamIcon";
import { QuestionIcon } from "../icons/QuestionIcon";
import { BlogIcon } from "../icons/BlogIcon";
import { DocCheckedIcon } from "../icons/DocCheckedIcon";
import { SigninIcon } from "../icons/SinginIcon";
import { BsHouseDoor } from "react-icons/bs";
import { LinkToPlatformButton } from "../buttons/LinkToPlatformButton";

const navBarSections: NavBarSection[] = [
  {
    icon: <BsHouseDoor />,
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    icon: <DocCheckedIcon />,
    label: "Transparencia",
    href: "/transparencia",
  },
  {
    icon: <BlogIcon />,
    label: "Blog",
    href: "/blog",
  },
  {
    icon: <QuestionIcon />,
    label: "FAQs",
    href: "/#faqs",
    id: "#faqs",
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
      <Footer />

      <WhatsAppButton />
    </>
  );
};
