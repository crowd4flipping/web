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
};

export const ProjectFinancialDataShowcase = ({
  status,
  totalProjectAmount,
  profitability,
  currentAmount,
  isHorizontal = false,
}: ProjectFinancialDataProps) => {
  const boxStyle = () => {
    let style = styles.projectFinancialData;
    if (isHorizontal) style.concat(" ", styles.projectFinancialData_horizontal);
    return style;
  };

  const fundstyle = () => {
    if (isHorizontal) {
      return `${styles.projectFinancialData_horizontal} ${styles.projectFinancialData_funds_horizontal}`;
    }
    return ;
  };

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
    <div className={boxStyle()}>
      {status == "funding" && (
        <div>
          <p>Objetivo</p>
          <p
            className={`${styles.projectFinancialData_highlight} ${styles.projectFinancialData_highlight_yield_darkMode}`}
          >
            {formatedAmount}
          </p>
        </div>
      )}

      <div>
        <p>Rentabilidad anual</p>
        <p
          className={`${styles.projectFinancialData_highlight} ${styles.projectFinancialData_highlight_yield_darkMode}`}
        >
          {profitability}%
        </p>
      </div>

      <div >
        <p>Recaudado</p>

        {status == "funding" ? (
          <FundedProgressBar
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <p
            className={`${styles.projectFinancialData_highlight} ${styles.projectFinancialData_highlight_yield_darkMode}`}
          >
            {formatedAmount}
          </p>
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
