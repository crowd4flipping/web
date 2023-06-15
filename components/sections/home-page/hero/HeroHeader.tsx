import { Button } from "@/components/buttons/primary/Button";
import heroStyles from "./styles/Hero.module.scss";
import Link from "next/link";
import { Routes } from "routes/Routes";

export const HeroHeader = () => {
  return (
    <div
      className={`${heroStyles.heroSection_header} ${heroStyles.heroSection_header_oneThird}`}
    >
      <div className={heroStyles.heroSection_sloganWrapper}>
        <h1 className={heroStyles.heroSection_title}>
          Invierte en inmuebles de forma{" "}
          <span className={heroStyles.heroSection_title_highlight}>
            innovadora
          </span>
        </h1>
        <h2 className={heroStyles.heroSection_subtitle}>
          Descubre la inversión inmobiliaria del futuro
        </h2>
      </div>

      <div className={heroStyles.heroSection_ctas}>
        <Link href="#info-section">
          <Button size="md" button="secondary" fullWidth>
            Saber más
          </Button>
        </Link>

        <Link href={Routes.app().queryHostFW()}>
          <Button size="md" button="primary" fullWidth>
            Empezar a invertir
          </Button>
        </Link>
      </div>
    </div>
  );
};
 