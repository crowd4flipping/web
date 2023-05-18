import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles/DesktopNavBar.module.scss";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MdClose } from "react-icons/md";
import { NavBarSection } from "../layouts/types/NavBar";

const variants = {
  closed: {
    display: "none",
    opacity: 0,
    x: "100%",
  },
  open: {
    display: "block",
    opacity: 1,
    x: "20vw",
  },
};

export const AnimatedMobileNavBar = ({
  navBarSections,
  isOpen,
  setIsOpen,
}: {
  navBarSections: NavBarSection[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    isOpen && (
      <div className={styles.navbar_mobileNavBar}>
        <div
          onClick={() => setIsOpen(false)}
          className={styles.navbar_mobileNavBar_bg}
        />
        <motion.nav
          className={styles.navbar_mobileNavBar_content}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <div>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.navbar_hamburgerMenu_close}
            >
              <span>
                <MdClose />
              </span>
            </button>

            <ul className={styles.navbar_buttonListMobile}>
              {navBarSections.map((section) => {
                if (section.href)
                  return (
                    <li key={section.label} className={styles.navbar_button}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={section.href}
                      >
                        <div className={styles.navbar_buttonText}>
                          {section.label}
                        </div>
                      </Link>
                    </li>
                  );
                return (
                  <li key={section.label} className={styles.navbar_button}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={styles.navbar_buttonText}
                      href={section.id ? section.id : section.href}
                    >
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      </div>
    )
  );
};
