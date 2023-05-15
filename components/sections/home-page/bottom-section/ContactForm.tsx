import { Button } from "@/components/buttons/primary/Button";
import { EmptyInfoCard } from "@/components/cards/info-card/EmptyInfoCard";
import styles from "./styles/ContactForm.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { ContactData } from "./ContactData";
import { ContactFormItem } from "./ContactFormItem";

export const ContactForm = () => {
  const { isSmallerSize } = useBreakPoints();

  const contentStyles = `${styles.contactForm_content} ${
    isSmallerSize && styles.contactForm_content_oneColumn
  }`;

  if (isSmallerSize)
    return (
      <div className={styles.contactForm}>
        <EmptyInfoCard width="100%">
          <div className={contentStyles}>
            <ContactData>
              <ContactFormItem />
            </ContactData>
          </div>
        </EmptyInfoCard>
      </div>
    );

  return (
    <div className={styles.contactForm}>
      <EmptyInfoCard width="100%">
        <div className={contentStyles}>
          <ContactData />
          <ContactFormItem />
        </div>
      </EmptyInfoCard>
    </div>
  );
};
