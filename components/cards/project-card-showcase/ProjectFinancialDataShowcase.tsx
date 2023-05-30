import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import styles from "../styles/ProjectFinancialData.module.scss";
import { FundedProgressBar } from "./FundedProgressBar";
import { MoneyFormatter } from "utils/MoneyFormatter";

type ProjectFinancialDataProps = {
  status: ProjectStatus;
  totalProjectAmount: number;
  currentAmount: number;
  profitability: string;
  isHorizontal?: boolean;
  isDarkMode?: boolean;
};

export const ProjectFinancialDataShowcase = ({
  status,
  totalProjectAmount,
  profitability,
  currentAmount,
  isHorizontal = false,
  isDarkMode = false,
}: ProjectFinancialDataProps) => {
  const boxStyle = () => {
    let style = styles.projectFinancialData;
    if (isHorizontal) style.concat(" ", styles.projectFinancialData_horizontal);
    return style;
  };

  const highlightStyle = `${styles.projectFinancialData_highlight} ${
    isDarkMode
      ? styles.projectFinancialData_highlight_yield_darkMode
      : styles.projectFinancialData_highlight_yield
  }`;

  const dividerStyle = `${styles.projectFinancialData_divider} ${styles.projectFinancialData_divider_whiteMode}`

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status == "in_study")
    return (
      <div className={boxStyle()}>
        <hr className={dividerStyle} />
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
    <div className={boxStyle()}>
      {status == "funding" && (
        <div>
          <p>Objetivo</p>
          <p className={highlightStyle}>{formatedAmount}</p>
        </div>
      )}

      <div>
        <p>Rentabilidad anual</p>
        <p className={highlightStyle}>{profitability}%</p>
      </div>

      <div>
        <p>Recaudado</p>

        {status == "funding" ? (
          <FundedProgressBar
            isDarkMode={isDarkMode}
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <p className={highlightStyle}>{formatedAmount}</p>
        )}
      </div>

      {status == "active" && (
        <p className={styles.projectFinancialData_info}>
          Este proyecto ya está en ejecución
        </p>
      )}
      {status == "finished" && (
        <p className={styles.projectFinancialData_info}>
          Este proyecto ya ha sido explotado
        </p>
      )}
    </div>
  );
};
