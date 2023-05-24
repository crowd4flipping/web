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
    let style = styles.projectFinancialData_funds;
    if (isHorizontal)
      style.concat(" ", styles.projectFinancialData_funds_horizontal);
    return style;
  };

  const formatedAmount = MoneyFormatter.round(totalProjectAmount);

  if (status == "in_study")
    return (
      <div className={boxStyle()}>
        <hr className={styles.projectFinancialData_divider} />
        <p className={styles.projectFinancialData_inStudyContent}>
          Estamos analizando la viabilidad de este proyecto, te enviaremos un
          correo electrónico cuando esté disponible para invertir. Recuerda
          visitar la bandeja de spam.
        </p>
      </div>
    );

  return (
    <div className={boxStyle()}>
      <div className={fundstyle()}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p>Recaudado</p>
        </div>

        {status == "processing" ? (
          <FundedProgressBar
            currentAmount={currentAmount}
            maxAmount={totalProjectAmount}
          />
        ) : (
          <p className={styles.projectFinancialData_highlight}>
            {formatedAmount}
          </p>
        )}
      </div>

      <div className={styles.projectFinancialData_dataWrapper}>
        <div >
          <p>Rent. anual</p>
          <p
            className={`${styles.projectFinancialData_highlight} ${styles.projectFinancialData_highlight_yield_darkMode}`}
          >
            {profitability}%
          </p>
        </div>
        <div>
          <p>Objectivo</p>
          <p
            className={styles.projectFinancialData_highlight}
          >
            {formatedAmount}
          </p>
        </div>
      </div>
    </div>
  );
};
