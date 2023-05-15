import React, {useState, useEffect} from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';

function Header({title}) {
  const [activeFixedNav, setActiveFixedNav] = useState(false) 
    useEffect(() => {
    if(!document){
        return
    }
    window.addEventListener("scroll", ()=>{ 
        if(window.scrollY > 100){
            setActiveFixedNav(true)
        }else if(window.scrollY < 100){
            setActiveFixedNav(false)
        }
    })
    }, [])
  return (
    <nav className={ activeFixedNav ? `${styles.header_page} ${styles.display_none}` : styles.header_page }>
        <section className={styles.logo_container}>
            <Link href={'/'} >
                <Image src={Logo} width={120} height={50} alt='crowd for flipping logo' />
            </Link>
        </section>
        <section  className={styles.header_page_links_container}>
            <h1 className={styles.header_page_title}>
                {title}
            </h1>
        </section>
    </nav>
  )
}

export default Header
