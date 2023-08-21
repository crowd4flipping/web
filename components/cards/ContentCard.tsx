import { ReactElement } from "react";
import styles from "./styles/ContentCard.module.scss";

type Props = {
  title: string;
  description?: string;
  theme?: "dark" | "light";
  children: ReactElement;
};

export const ContentCard = ({
  title,
  description,
  theme = "light",
  children,
}: Props) => {
  if (theme == "light")
    return (
      <div className={styles.contentCard}>
        <div className={styles.contentCard__header}>
          <h3>{title}</h3>
          {description && <p className={styles.contentCard__description}>{description}</p>}
        </div>
        {children}
      </div>
    );

  if (theme == "dark")
    return (
      <div className={`${styles.contentCard} ${styles.contentCard__darkTheme}`}>
        <div className={styles.contentCard__header__darkTheme}>
          <h3>{title}</h3>
          {description && <p className={styles.contentCard__description}>{description}</p>}
        </div>
        {children}
      </div>
    );
};
