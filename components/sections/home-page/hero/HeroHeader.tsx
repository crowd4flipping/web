import heroStyles from "./styles/Hero.module.scss";
import { LinkButton } from "@crowd4flipping/ui-components";
import { LinkToPlatformButton } from "@/components/buttons/LinkToPlatformButton";

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
          Inversión inmobiliaria <span className={heroStyles.heroSection_subtitle_highligh}>desde 500€</span>
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

        <LinkToPlatformButton fullWidth variant="primary">
          Regístrate gratis
        </LinkToPlatformButton>
      </div>
    </div>
  );
};
