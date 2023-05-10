import Image, { StaticImageData } from "next/image";
import styles from "./styles/MemberProfile.module.scss"

type MemberProfileProps = {
  firstSrc: StaticImageData | string;
  secondSrc: StaticImageData | string;
  alt: string;
  memberName: string;
  role: string;
};

export const MemberProfile = (props: MemberProfileProps) => {
  const { firstSrc, secondSrc, alt, memberName, role } = props;
  
  return (
    <div className={styles.memberProfile}>
      <div className={styles.memberProfile_image_container}>
        <Image src={firstSrc} width={250} height={180} alt={alt} />
      </div>
      <div className={styles.memberProfile_image_container_}>
        <Image src={secondSrc} width={250} height={180} alt={alt} />
      </div>
      <div className={styles.memberProfile_card}>
        <h3 className={styles.memberProfile_name}>{memberName}</h3>
        <p className={styles.memberProfile_role}>{role}</p>
      </div>
    </div>
  );
};
