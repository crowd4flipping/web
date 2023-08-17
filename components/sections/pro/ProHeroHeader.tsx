import { Button } from "@crowd4flipping/ui-components";
import { ProTag } from "./ProTag";
import styles from "./styles/ProHeroHeader.module.scss";
import { ProHeroTitle } from "./ProHeroTitle";

export const ProHeroHeader = () => {
  return (
    <div className={styles.proHeroHeader}>
      <div className={styles.proHeroHeader__content}>

        <div className={styles.proHeroHeader__c4f_content}>
          <h2 className={styles.proHeroHeader__c4f}>Crowd4Flipping</h2>
          <ProTag />
        </div>

        <div className={styles.proHeroHeader__divider} />

        <ProHeroTitle />

        <div className={styles.proHeroHeader__button}>
          <Button variant="primary" size="lg">
            Contacta con nosotros
          </Button>
        </div>
      </div>
    </div>
  );
};
