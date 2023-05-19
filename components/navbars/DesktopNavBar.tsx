import Image from "next/image";
import styles from "./styles/DesktopNavBar.module.scss";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";
import { NavBarSection } from "../layouts/types/NavBar";

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
      <div  className={styles.navbar_content}>
        
        <div>
          <div className={styles.navbar_button}>
            <Link href="/">
              <Image
                src={Logo}
                width={136}
                height={40}
                alt="logo crowd4flipping"
                objectFit="contain"
              />
            </Link>
          </div>
        </div>

        <ul className={styles.navbar_buttonList}>
          {navBarSections.map((section) => {
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

        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className={styles.navbar_hamburgerMenu}
        >
          <MdMenu />
        </button>
      </div>
    </nav>
  );
};
