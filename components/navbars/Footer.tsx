import Link from "next/link";
import styles from "./styles/Footer.module.scss";
import navStyles from "./styles/DesktopNavBar.module.scss";
import Image from "next/image";
import C4FLogo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";

type FooterNav = {
  [key: string]: { label: string; href: string };
};

const footerNavContent: FooterNav = {
  c4fPro: {
    label: "Crowd4Flipping PRO",
    href: "https://pro.crowd4flipping.com/",
  },
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
  const footerNavLeft = Object.entries(footerNavContent).slice(0, 3);
  const footerNavRight = Object.entries(footerNavContent).slice(3, 5);
  const currentYear = new Date().getFullYear();
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
      <div className={styles.footer_copyright_content}>
        <Link href="/">
          <div>
            <Image
              className={styles.footer_logo}
              src={C4FLogo}
              width={70}
              height={50}
              alt="crowd4flipping"
              objectFit="contain"
            />
          </div>
        </Link>
        <p className={styles.footer_copyright}>
          Copyright {currentYear} · Crowd4Flipping.com
        </p>
      </div>
    </footer>
  );
};
