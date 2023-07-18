import Image from "next/image";
import styles from "./styles/DesktopNavBar.module.scss";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.svg";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import { NavBarSection } from "../layouts/types/NavBar";
import { LinkButton } from "@crowd4flipping/ui-components";

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
  const navBarSignUp = navBarSections.find(section => section.label == "Regístrate")
  return (
    <nav className={navBarStyle}>
      <div className={styles.navbar_content}>
        <div>
          <div className={styles.navbar_button}>
            <Link href="/">
              <Image
                src={Logo}
                width={110}
                height={45}
                alt="logo crowd4flipping"
                objectFit="contain"
              />
            </Link>
          </div>
        </div>

        <ul className={styles.navbar_buttonList}>
          {navBarSections.map((section) => {
            if (section.label == "Regístrate")
              return (
                <li key={section.label} className={styles.navbar_button}>
                  <LinkButton variant="primary" href={section.href}>
                    {section.label}
                  </LinkButton>
                </li>
              );
            if (section.href)
              return (
                <li key={section.label} className={styles.navbar_button}>
                  <Link href={section.href}>
                    <div className={styles.navbar_buttonText}>
                      {section.label}
                    </div>
                  </Link>
                </li>
              );
            return (
              <li key={section.label} className={styles.navbar_button}>
                <a
                  className={styles.navbar_buttonText}
                  href={section.id ? section.id : section.href}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.navbar__mobile}>
          <LinkButton variant="primary" href={navBarSignUp.href}>
            {navBarSignUp.label}
          </LinkButton>

          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={styles.navbar_hamburgerMenu}
            >
            <MdMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};
