import styles from "../styles/Card.module.scss";

type ProjectFinancialDataProps = {
  totalProjectAmount: string;
  profitability: string;
  isHorizontal?: boolean;
};

export const ProjectFinancialData = ({
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
      <div className={fundstyle}>
        <p>Recaudado</p>
        <p>
          <span className={styles.cardProject_financialData_highlight}>
            {totalProjectAmount}€
          </span>{" "}
          {/*  / {totalProjectAmount}€ */}
        </p>
      </div>

      <div>
        <p>Rent. anual</p>
        <p
          className={`${styles.cardProject_financialData_highlight} ${styles.cardProject_financialData_highlight_yield}`}
        >
          {profitability}%
        </p>
      </div>
    </div>
  );
};
