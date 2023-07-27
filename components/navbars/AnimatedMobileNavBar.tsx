import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles/DesktopNavBar.module.scss";
import { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import { NavBarSection } from "../layouts/types/NavBar";
import { LinkButton } from "@crowd4flipping/ui-components";
import { useAdQueryTracker } from "../hooks/useAdQueryTracker";
import { useRouter } from "next/router";
import { LinkToPlatformButton } from "../buttons/LinkToPlatformButton";

const variants = {
  closed: {
    display: "none",
    opacity: 0,
    // x: "-100%",
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
  const { query } = useRouter();
  const { getAdQueryTracker } = useAdQueryTracker(query);
  const queryAdTracker = getAdQueryTracker();
  const queryAd = !queryAdTracker ? "" : `&${queryAdTracker}`;
  const navBarSignUp = navBarSections.find(
    (section) => section.label == "Regístrate"
  );
  const navBarSignIn = navBarSections.find(
    (section) => section.label == "Acceder"
  );

  return (
    isOpen && (
      <div className={styles.navbar_mobileNavBar}>
        <div
          onClick={() => setIsOpen(false)}
          className={styles.navbar_mobileNavBar_bg}
        />
        <motion.nav
          className={styles.navbar_mobileNavBar__content_wrapper}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <div className={styles.navbar_mobileNavBar__content}>
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
                /* if (section.label == "Regístrate" || section.label == "Acceder")
                  return; */

                if (section.href)
                  return (
                    <li key={section.label} className={styles.navbar_button}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={section.href}
                      >
                        <div
                          className={`${styles.navbar_buttonText} ${styles.navbar_buttonText_mobile}`}
                        >
                          <div className={styles.navbar_buttonIcon}>
                            {section.icon}
                          </div>{" "}
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
            <div className={styles.navbar__mobile_ctas}>
              <div className={styles.navbar__mobile_cta}>
                <LinkToPlatformButton fullWidth variant="primary">
                  Regístrate
                </LinkToPlatformButton>
              </div>
              <div className={styles.navbar__mobile_cta}>
                <LinkToPlatformButton fullWidth variant="secondary">
                  Acceder
                </LinkToPlatformButton>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    )
  );
};
