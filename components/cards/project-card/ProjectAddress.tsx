import styles from "../styles/Card.module.scss";

export const ProjectAddress = ({region, street}:{region:string, street:string}) => {
  
  return (
    <div className={styles.cardProject_address}>
      <p className={styles.cardProject_region}>{region}</p>
      <p className={styles.cardProject_street}>{street}</p>
    </div>
  );
};
