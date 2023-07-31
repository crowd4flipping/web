import { ReactElement } from "react";
import styles from "./styles/LockedSection.module.scss";
import Link from "next/link";
import { Routes } from "routes/Routes";
import { Button } from "@crowd4flipping/ui-components";
import { useAdQueryTracker } from "@/components/hooks/useAdQueryTracker";
import { useRouter } from "next/router";
import { LinkToPlatformButton } from "@/components/buttons/LinkToPlatformButton";

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
        {showSignupCard && (
          <div className={styles.lockedSection_card}>
            <h3>Accede al proyecto</h3>
            <p>
              Para ver información detallada de este proyecto debes registrarte
              o iniciar sesión
            </p>
            <div>
              <LinkToPlatformButton variant="primary">
                Acceder
              </LinkToPlatformButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
