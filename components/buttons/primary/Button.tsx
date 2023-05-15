import styles from "./styles/Button.module.scss";
import { ButtonProps } from "./types/types";

export const Button = ({
  children,
  type = "button",
  onClick,
  button,
  size,
  fullWidth = false,
}: ButtonProps) => {

  const getButtonStyles = () => {
    let width = "";
    let bSize = "";

    if (fullWidth) width = styles.button_fullWidth;

    if(size == "sm") bSize = styles.button_sm; 

    if (button == "primary") return `${styles.button_primary} ${width} ${bSize}`;
    if (button == "secondary") return `${styles.button_secondary} ${width} ${bSize}`;
  };

  return (
    <button onClick={onClick} type={type} className={getButtonStyles()}>
      {children}
    </button>
  );
};
