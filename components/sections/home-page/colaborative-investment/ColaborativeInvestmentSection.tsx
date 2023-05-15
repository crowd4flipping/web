import Image from "next/image";
import styles from "./styles/ColaborativeInvestment.module.scss";
import ColaborativeInvestment from "@/public/images/home-page/invertir-de-forma-colaborativa.png";

export const ColaborativeInvestmentSection = () => {

  return (
    <div className={styles.colaborativeInvestment}>
      <h2 className={styles.colaborativeInvestment_title}>
        Invierte de forma colaborativa
      </h2>
      <div className={styles.colaborativeInvestment_image}>
        <Image
          alt="invertir-de-forma-colaborativa"
          width={598}
          height={303}
          src={ColaborativeInvestment}
        ></Image>
      </div>
    </div>
  );
};
