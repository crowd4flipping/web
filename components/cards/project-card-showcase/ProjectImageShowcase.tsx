import styles from "../styles/Card.module.scss";

export const ProjectImageShowcase = ({
  region,
  street,
}: {
  region: string;
  street: string;
}) => {
  return (
    <div className={styles.projectCardShowcase_imageWrapper}>
      <div className={styles.projectCardShowcase_address}>
        <p className={styles.projectCardShowcase_region}>{region}</p>
        <p className={styles.projectCardShowcase_street}>{street}</p>
      </div>
      <div className={styles.projectCardShowcase_image} />
    </div>
  );
};
