import { SectionLayout } from "@/components/layouts/SectionLayout";
import Jorge from "@/public/images/profiles/jorge_01.png";
import Jorge_ from "@/public/images/profiles/jorge_02.png";
import Alex from "@/public/images/profiles/alex_01.png";
import Alex_ from "@/public/images/profiles/alex_02.png";
import Andres from "@/public/images/profiles/andres_01.png";
import Andres_ from "@/public/images/profiles/andres_02.png";
import Abogado from "@/public/images/profiles/abogado_01.png";
import Abogado_ from "@/public/images/profiles/abogado_02.png";
import Fiorella from "@/public/images/profiles/fio_01.png";
import Fiorella_ from "@/public/images/profiles/fio_02.png";
import { MemberProfile } from "./MemberProfile";
import styles from "./styles/TeamProfiles.module.scss";

export const TeamProfiles = () => {
  return (
    <SectionLayout>
      <div className={styles.teamProfiles}>
        <MemberProfile
          firstSrc={Jorge}
          secondSrc={Jorge_}
          alt="Jorge-Montosa-Profile"
          memberName="Jorge Montosa"
          role="CEO"
        />
        <MemberProfile
          firstSrc={Alex}
          secondSrc={Alex_}
          alt="Alex-Castells-Profile"
          memberName="Alex Castells"
          role="CFO"
        />
        <MemberProfile
          firstSrc={Andres}
          secondSrc={Andres_}
          alt="Andres-Gomez-Profile"
          memberName="Andres Gómez"
          role="CTO"
        />
        <MemberProfile
          firstSrc={Fiorella}
          secondSrc={Fiorella_}
          alt="Fiorella-Piazza-Profile"
          memberName="Fiorella Piazza"
          role="Dpto. administrativo"
        />
        <MemberProfile
          firstSrc={Abogado}
          secondSrc={Abogado_}
          alt="Daniel-Profile"
          memberName="Daniel Marqués"
          role="Dpto. compliance"
        />
      </div>
    </SectionLayout>
  );
};
