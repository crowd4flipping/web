import { MoneyFormatter } from "utils/MoneyFormatter";
import styles from "../../styles/ProjectFinancialData.module.scss";

type FundedProgressBarProps = {
  maxAmount: number;
  currentAmount: number;
  isDarkMode: boolean;
};

const InnerBar = ({
  percentageFunded,
  percentageToFund,
  remainingAmountToFund,
  isDarkMode = false,
}: {
  percentageFunded: number;
  percentageToFund: number;
  remainingAmountToFund: number;
  isDarkMode: boolean;
}) => {
  const roundMoney = MoneyFormatter.withUnitySufix(remainingAmountToFund);
  const inBarStyles = `${styles.projectFinancialData_maxAmount_inBar} ${
    !isDarkMode && styles.projectFinancialData_maxAmount_inBar_whiteMode
  }`;

  const percentageStyles = `${styles.projectFinancialData_percentageFunded} ${
    !isDarkMode && styles.projectFinancialData_percentageFunded_whiteMode
  }`;

  return (
    <>
      <div
        style={{
          width: `${percentageToFund + 100}%`,
        }}
        className={styles.projectFinancialData_inBarWrapper}
      >
        <p className={inBarStyles}>faltan: {roundMoney}</p>
      </div>
      {percentageFunded >= 15 && (
        <div className={styles.projectFinancialData_percentageFundedWrapper}>
          <p className={percentageStyles}>{percentageFunded}%</p>
        </div>
      )}
    </>
  );
};

export const FundedProgressBar = (props: FundedProgressBarProps) => {
  const { currentAmount, maxAmount, isDarkMode } = props;
  const calcPercentageFunded = (currentAmount / maxAmount) * 100;
  const calcPercentageToFund =
    ((maxAmount - currentAmount) / currentAmount) * 100;
  const isOverFunded = Math.ceil(calcPercentageFunded) > 100;

  const percentageFunded = isOverFunded ? 100 : Math.ceil(calcPercentageFunded);
  const percentageToFund = isOverFunded ? 0 : Math.ceil(calcPercentageToFund);

  const limitCurrentAmount =
    currentAmount > maxAmount ? maxAmount : currentAmount;
  const roundMoney = MoneyFormatter.withUnitySufix(
    maxAmount - limitCurrentAmount
  );

  const progressbarStyle = `${styles.projectFinancialData_progressBar} ${
    !isDarkMode && styles.projectFinancialData_progressBar_whiteMode
  }`;

  const barProgressbarStyle = `${styles.projectFinancialData_progressBar_bar} ${
    !isDarkMode && styles.projectFinancialData_progressBar_bar_whiteMode
  }`;

  const maxAmountStyles = `${styles.projectFinancialData_maxAmount} ${
    !isDarkMode && styles.projectFinancialData_maxAmount_whiteMode
  }`;

  return (
    <div className={progressbarStyle}>
      <p className={maxAmountStyles}>faltan: {roundMoney}</p>

      <div
        style={{ width: `${percentageFunded}%` }}
        className={barProgressbarStyle}
      >
        <InnerBar
          isDarkMode={isDarkMode}
          percentageFunded={percentageFunded}
          percentageToFund={percentageToFund}
          remainingAmountToFund={maxAmount - limitCurrentAmount}
        />
      </div>
    </div>
  );
};
