import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles/DesktopNavBar.module.scss";
import { MdMenu } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import { NavBarSection } from "../layouts/types/NavBar";

const variants = {
  open: { opacity: 1, x: "5rem" },
  closed: { opacity: 0, x: "100%" },
};

export const AnimatedMobileNavBar = ({
  navBarSections,
  isOpen,
  setIsOpen,
}: {
  navBarSections: NavBarSection[],
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    isOpen && (
      <div className={styles.navbar_mobileNavBar_bg}>
        <motion.nav
          className={styles.navbar_mobileNavBar}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={styles.navbar_hamburgerMenu_close}
          >
            <span><MdClose /></span>
          </button>
          <ul className={styles.navbar_buttonListMobile}>
          {navBarSections.map((section) => {
            if (section.href)
              return (
                <li key={section.label} className={styles.navbar_button}>
                  <Link  onClick={()=>setIsOpen((prev) => !prev)} href={section.href}>
                    <div className={styles.navbar_buttonText}>
                      {section.label}
                    </div>
                  </Link>
                </li>
              );
            return (
              <li key={section.label} className={styles.navbar_button}>
                <a  onClick={()=>setIsOpen((prev) => !prev)}
                  className={styles.navbar_buttonText}
                  href={section.id ? section.id : section.href}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
          </ul>
        </motion.nav>
      </div>
    )
  );
};
