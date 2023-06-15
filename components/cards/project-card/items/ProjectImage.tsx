import Image from "next/image";
import styles from "../../styles/Card.module.scss";

export const ProjectImage = ({
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
    <div className={styles.projectCard_imageWrapper}>
      {src &&
        (isSmall ? (
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
        ))}
      <div className={styles.projectCard_address}>
        <p className={styles.projectCard_region}>{region}</p>
        <p className={styles.projectCard_street}>{street}</p>
      </div>
      {!src && <div className={styles.projectCard_image} />}
    </div>
  );
};
