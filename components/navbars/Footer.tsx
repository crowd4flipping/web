import Link from "next/link";
import styles from "./styles/Footer.module.scss";
import navStyles from "./styles/DesktopNavBar.module.scss";

type FooterNav = {
  [key: string]: { label: string; href: string };
};

const footerNavContent: FooterNav = {
  privacyPolicy: {
    label: "Politica de privacidad",
    href: "/politica-privacidad",
  },
  legalNotice: {
    label: "Aviso legal",
    href: "/aviso-legal",
  },
  cookiesPolicy: {
    label: "Política de Cookies",
    href: "/politica-cookies",
  },
  transparency: {
    label: "Programa de transparencia",
    href: "/transparencia",
  },
};

export const Footer = () => {
  const footerNavLeft = Object.entries(footerNavContent).slice(0, 2);
  const footerNavRight = Object.entries(footerNavContent).slice(2, 4);
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer_content}>
        
        <ul className={navStyles.navbar_buttonListMobile}>
          {footerNavLeft.map((nav) => {
            return (
              <li key={nav[0]} className={navStyles.navbar_button}>
                <Link href={nav[1].href}>
                  <div
                    className={`${navStyles.navbar_buttonText} ${navStyles.navbar_buttonText_white}`}
                  >
                    {nav[1].label}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className={navStyles.navbar_buttonListMobile}>
          {footerNavRight.map((nav) => {
            return (
              <li key={nav[0]} className={navStyles.navbar_button}>
                <Link href={nav[1].href}>
                  <div
                    className={`${navStyles.navbar_buttonText} ${navStyles.navbar_buttonText_white}`}
                  >
                    {nav[1].label}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};
