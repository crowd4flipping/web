import Image from "next/image";
import styles from "./styles/DesktopNavBar.module.scss";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.svg";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import { NavBarSection } from "../layouts/types/NavBar";
import { LinkToPlatformButton } from "../buttons/LinkToPlatformButton";

export const DesktopNavBar = ({
  setIsOpen,
  navBarSections,
  isFixed = false,
}: {
  isFixed?: boolean;
  navBarSections: NavBarSection[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const navBarStyle = `${isFixed ? styles.navbar_fixed : styles.navbar}`;

  return (
    <nav className={navBarStyle}>
      <div className={styles.navbar_content}>
        <div>
          <Link href="/">
            <div className={styles.navbar_button}>
              <Image
                src={Logo}
                width={110}
                height={45}
                alt="logo crowd4flipping"
                objectFit="contain"
              />
            </div>
          </Link>
        </div>

        <ul className={styles.navbar_buttonList}>
          {navBarSections.map((section) => {
            if (section.href)
              return (
                <li key={section.label} className={styles.navbar_button}>
                  <div className={styles.navbar_buttonText}>
                    <Link href={section.href}>{section.label}</Link>
                  </div>
                </li>
              );
            return (
              <li key={section.label} className={styles.navbar_button}>
                <a
                  className={styles.navbar_buttonText}
                  href={section.id ? section.id : section.href}
                  aria-label={section.label}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
          <div className={styles.navbar__ctas}>
            <LinkToPlatformButton variant="secondary">
              Acceder
            </LinkToPlatformButton>
            <LinkToPlatformButton variant="primary">
              Regístrate
            </LinkToPlatformButton>
          </div>
        </ul>

        <div className={styles.navbar__mobile}>
          <div className={styles.navbar__ctas}>
            <LinkToPlatformButton variant="primary">
              Regístrate
            </LinkToPlatformButton>
          </div>

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={styles.navbar_hamburgerMenu}
            type="button"
            aria-label="Menú desplegable"
          >
            <MdMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};
