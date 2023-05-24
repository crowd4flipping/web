import { MoneyFormatter } from "utils/MoneyFormatter";
import styles from "../styles/ProjectFinancialData.module.scss";

type FundedProgressBarProps = {
  maxAmount: number;
  currentAmount: number;
};

const InnerBar = ({
  percentageFunded,
  percentageToFund,
  remainingAmountToFund,
}: {
  percentageFunded: number;
  percentageToFund: number;
  remainingAmountToFund: number;
}) => {

  const roundMoney = MoneyFormatter.withUnitySufix(remainingAmountToFund);

  return (
    <>
      <div
        style={{
          width: `${percentageToFund + 100}%`,
        }}
        className={styles.projectFinancialData_inBarWrapper}
      >
        <p className={styles.projectFinancialData_maxAmount_inBar}>
          faltan: {roundMoney}
        </p>
      </div>
      {percentageFunded >= 15 && (
        <div className={styles.projectFinancialData_percentageFundedWrapper}>
          <p className={styles.projectFinancialData_percentageFunded}>
            {percentageFunded}%
          </p>
        </div>
      )}
    </>
  );
};

export const FundedProgressBar = (props: FundedProgressBarProps) => {
  const { currentAmount, maxAmount } = props;
  const calcPercentageFunded = (currentAmount / maxAmount) * 100;
  const calcPercentageToFund =
    ((maxAmount - currentAmount) / currentAmount) * 100;
  const isOverFunded = Math.ceil(calcPercentageFunded) > 100;

  const percentageFunded = isOverFunded ? 100 : Math.ceil(calcPercentageFunded);
  const percentageToFund = isOverFunded ? 0 : Math.ceil(calcPercentageToFund);

  const roundMoney = MoneyFormatter.withUnitySufix(maxAmount - currentAmount);

  return (
    <div className={styles.projectFinancialData_progressBar}>
      <p className={styles.projectFinancialData_maxAmount}>faltan: {roundMoney}</p>

      <div
        style={{ width: `${percentageFunded}%` }}
        className={styles.projectFinancialData_progressBar_bar}
      >
        <InnerBar
          percentageFunded={percentageFunded}
          percentageToFund={percentageToFund}
          remainingAmountToFund={maxAmount - currentAmount}
        />
      </div>
    </div>
  );
};
