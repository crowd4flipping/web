import Image from "next/image";
import { ProTag } from "./ProTag";
import styles from "./styles/C4FProLogo.module.scss";
import C4FPro from "@/public/images/brand/crowd4flipping/logo/c4f_pro.svg"

export const C4FProLogo = () => {
  return (
    <div className={styles.c4fProLogo_content}>
      <h2 className={styles.c4fProLogo__c4f}>Crowd4Flipping</h2>
      <Image src={C4FPro} alt="Crowd4Flipping Pro - logo" width={50} height={20}  objectFit="contain" />
    </div>
  );
};
