import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Form from '../forms/OwnerForm';

function HomeSection() {
  return (
    <div className={styles.page_section_form}>
        <div className={styles.page_section_container_form}>
            <div className={`${styles.page_section_body_form} `}>
              <div className={styles.form_left}>
                <Form />
              </div>
              <div className={styles.form_right}>
                <div className={`${styles.image_s2}`} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection 