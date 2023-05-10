import { ReactElement } from "react";
import styles from "../styles/Card.module.scss";

type InfoCardProps = {
  width?: string;
  bgColor?: "surface" | "white";
  children: ReactElement | ReactElement[];
};

export const EmptyInfoCard = ({
  children,
  width,
  bgColor = "surface",
}: InfoCardProps) => {
  const infoCardStyles = `${styles.infoCard} ${
    bgColor == "surface" && styles.infoCard_surfaceColor
  }`;

  return (
    <div style={{ width }} className={infoCardStyles}>
      {children}
    </div>
  );
};
