import heroStyles from "./styles/Hero.module.scss";
import { LinkButton } from "@crowd4flipping/ui-components";
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
        <LinkButton
          size="lg"
          fullWidth
          href="#info-section"
          variant="secondary"
        >
          Saber más
        </LinkButton>

        <LinkButton
          size="lg"
          href={Routes.app().queryHostFW()}
          variant="primary"
          fullWidth
        >
          Regístrate gratis
        </LinkButton>
      </div>
    </div>
  );
};
