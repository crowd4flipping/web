import styles from "../styles/Card.module.scss";
import Image from "next/image";
import { Button } from "@/components/buttons/primary/Button";

type ProjectFinancialDataProps = {
  totalProjectAmount: string;
  profitability: string;
  isHorizontal?: boolean;
};

const ProjectFinancialData = ({
  totalProjectAmount,
  profitability,
  isHorizontal = false,
}: ProjectFinancialDataProps) => {
  const boxStyle = `${styles.cardProject_financialDataBox} ${
    isHorizontal && styles.cardProject_financialDataBox_horizontal
  }`;
  const fundstyle = `${styles.cardProject_financialData_funds} ${
    isHorizontal && styles.cardProject_financialData_funds_horizontal
  }`;

  return (
    <div className={boxStyle}>
      <div style={{ color: "white" }} className={fundstyle}>
        <p>Recaudado</p>
        <p>
          <span className={styles.cardProject_financialData_highlight}>
            {totalProjectAmount}€
          </span>{" "}
          {/*  / {totalProjectAmount}€ */}
        </p>
      </div>

      <div style={{ color: "white" }}>
        <p>Rentabilidad</p>
        <p>
          <span
            style={{ color: "#8BF502" }}
            className={`${styles.cardProject_financialData_highlight}`}
          >
            {profitability}%
          </span>
        </p>
      </div>
    </div>
  );
};

const ProjectAddress = ({
  region,
  street,
}: {
  region: string;
  street: string;
}) => {
  return (
    <div
      style={{ backgroundColor: "#7F8F9B", color: "white" }}
      className={styles.cardProject_address}
    >
      <p className={styles.cardProject_region}>{region}</p>
      <p className={styles.cardProject_street}>{street}</p>
    </div>
  );
};

export const DecoratorProjectCard = () => {
  const cardContentStyle = styles.cardProject_content;
  const cardContentLeftStyle = styles.cardProject_contentLeft;
  return (
    <div className={`${styles.cardProject} ${styles.projectCardDecorator}`}>
      <div className={cardContentStyle}>
        <div className={cardContentLeftStyle}>
          <ProjectAddress
            region="Mallorca, Baleares"
            street={"C/ Blas de Lezo"}
          />

          <ProjectFinancialData
            isHorizontal={false}
            totalProjectAmount={"750.000"}
            profitability={"14"}
          />
        </div>

        <div className={styles.cardProject_contentRight}>
          <div className={styles.cardProject_image} />
          <div style={{ color: "white" }} className={styles.cardProject_button}>
            <Button size="sm" button="secondary" fullWidth>
              Ver proyecto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
