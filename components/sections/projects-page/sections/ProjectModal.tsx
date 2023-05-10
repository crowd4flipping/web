import Modal from "@/components/modals/ProjectModal";
import Image from "next/image";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";
import styles from "../../../../styles/project_page.module.scss";
import Link from "next/link";
import { Route } from "routes/Routes";

export const ProjectModal = ({ projectId }: { projectId: string }) => {
  return (
    <Modal>
      <div className={styles.modal_container}>
        <div className={styles.footer_logo_container}>
          <Image
            src={Logo}
            width={350}
            height={140}
            alt="logo crowd4flipping"
          />
        </div>
        <h1>
          Para ver la información detallada de este proyecto{" "}
          <span>debes iniciar sesión</span>.<br /> Si aún no tienes una cuenta,{" "}
          <span>¿a qué estás esperando?</span>
        </h1>
        <h2></h2>
        <Link href={Route().site.c4f_app.project(projectId)}>
          <div className={styles.button}>
            <span>Acceso a Crowd4Flipping</span>
          </div>
        </Link>
      </div>
    </Modal>
  );
};
