import { ReactElement } from "react";
import styles from "./styles/LockedSection.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import Link from "next/link";
import { Route } from "routes/Routes";

export const LockedSection = ({
  children,
  projectId,
  showSignupCard = true,
}: {
  children: ReactElement | ReactElement[];
  projectId: string;
  showSignupCard?: boolean;
}) => {
  return (
    <div className={styles.lockedSection}>
      <div className={styles.lockedSection_lockedContent}>
        <div className={styles.lockedSection_content}>{children}</div>
      </div>

      
        <div className={styles.lockedSection_cardWrapper}>
        {showSignupCard && (  <div className={styles.lockedSection_card}>
            <h3>Accede al proyecto</h3>
            <p>
              Para ver información detallada de este proyecto debes registrarte
              o iniciar sesión
            </p>
            <div>
              <Link href={Route().site.c4f_app.project(projectId)}>
                <Button size="md" button="primary">
                  Acceder
                </Button>
              </Link>
            </div>
          </div>)}
        </div>
      
    </div>
  );
};
