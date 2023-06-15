import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import styles from "../../styles/ProjectFinancialData.module.scss";
import { FundedProgressBar } from "./FundedProgressBar";
import { MoneyFormatter } from "utils/MoneyFormatter";

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
  isDarkMode?: boolean;
};

export const HorizontalFinancialData = ({
  status,
  totalProjectAmount,
  profitability,
  currentAmount,
  isDarkMode = false,
}: ProjectFinancialDataProps) => {
  const boxStyle = () => {
    return `${styles.projectFinancialData} ${styles.projectFinancialData_horizontal}`;
  };

  const fundstyle = () => {
    return `${styles.projectFinancialData_horizontal} ${styles.projectFinancialData_funds_horizontal}`;
  };

  const highLightStyle = `${styles.projectFinancialData_horizontal_highlight} ${
    isDarkMode
      ? styles.projectFinancialData_horizontal_highlight_yield_darkMode
      : styles.projectFinancialData_horizontal_highlight_yield
  }`;
  const infoStyle = `${styles.projectFinancialData_info} ${
    styles.projectFinancialData_info_center
  } ${!isDarkMode && styles.projectFinancialData_info_whiteMode}`;

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status == "in_study")
    return (
      <div className={boxStyle()}>
        <hr className={styles.projectFinancialData_divider} />
        <div className={styles.projectFinancialData_inStudyContent}>
          <p>Estamos analizando la viabilidad de este proyecto.</p>
          <p>
            Te enviaremos un correo electrónico cuando esté disponible para
            invertir.
          </p>
          <p>
            <b>Recuerda visitar la bandeja de spam.</b>
          </p>
        </div>
      </div>
    );

  return (
    <div className={styles.projectFinancialData}>
      <div className={fundstyle()}>
        <div>
          <p>Rent. anual</p>
          <p className={highLightStyle}>{profitability}%</p>
        </div>
        <div>
          {status == "funding" ? (
            <>
              <p>Objetivo</p>
              <p className={highLightStyle}>{formatedAmount}</p>
            </>
          ) : (
            <>
              <p>Recaudado</p>
              <p className={highLightStyle}>{formatedAmount}</p>
            </>
          )}
        </div>
      </div>
      {status == "funding" && (
        <div>
          <p>Recaudado</p>
          <FundedProgressBar
            isDarkMode={isDarkMode}
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        </div>
      )}

      {status == "active" && (
        <p className={infoStyle}>Este proyecto ya está en ejecución</p>
      )}
      {status == "finished" && (
        <p className={infoStyle}>Este proyecto ya ha sido explotado</p>
      )}
    </div>
  );
};
