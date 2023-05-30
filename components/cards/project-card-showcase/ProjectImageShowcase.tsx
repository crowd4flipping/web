import Image from "next/image";
import styles from "../styles/Card.module.scss";

export const ProjectImageShowcase = ({
  region,
  street,
  src,
  isSmall = false,
}: {
  region: string;
  street: string;
  src: string | undefined;
  isSmall?: boolean;
}) => {
  return (
    <div className={styles.projectCardShowcase_imageWrapper}>
      <div className={styles.projectCardShowcase_address}>
        <p className={styles.projectCardShowcase_region}>{region}</p>
        <p className={styles.projectCardShowcase_street}>{street}</p>
      </div>
      {src ? (
        isSmall ? (
          <Image
            src={src}
            alt="imagen del proyecto"
            width={243}
            height={227}
            objectFit="cover"
          />
        ) : (
          <Image
            src={src}
            alt="imagen del proyecto"
            width={272}
            height={227}
            objectFit="cover"
          />
        )
      ) : (
        <div className={styles.projectCardShowcase_image} />
      )}
    </div>
  );
};
