import React, {useState, useEffect} from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import {linksContent} from './NavBarLinks';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { MdOutlineAccountCircle } from "react-icons/md";

import InstagramIcon from '../../public/images/icons/instagramIcon.webp';
import { motion } from 'framer-motion';
import BurgerButton from '../buttons/BurgerButton';
import Router from 'next/router';

function Header() {

    const [activeFixedNav, setActiveFixedNav] = useState(false) 
    const [isOpen, setIsOpen] = useState(false);
    const [_isOpen, _setIsOpen] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(null);

    useEffect(() => {
    if(!document){
        return
    }
    window.addEventListener("scroll", ()=>{ 
        if(window.scrollY > 500){
            setActiveFixedNav(true)
        }else if(window.scrollY < 500){
            setActiveFixedNav(false)
        }
    })
    }, [])

    const effects = { 
        open: {
          y: 0,
          opacity: 1,
          position: 'fixed',
          display: 'flex'
        },
        close: {
          y: -1000,
          opacity: 0,
          display: 'none'
        },
        _open: {
          y: 0,
          opacity: 1,
          position: 'fixed',
          display: 'flex'
        },
        _close: {
          y: 1000,
          opacity: 0,
          display: 'none'
        },
      };

      const effectsLink = { 
        open: {
          opacity: 1,
          y: 0  
        },
        close: { 
          opacity: 0,
          y: -1000
        },
        _open: {
          opacity: 1,
          y: 0  
        },
        _close: { 
          opacity: 0,
          y: 1000
        }
      };
   
    const open = () =>{
        setIsOpen(state => !state) 
    }
    const _open = () =>{
        _setIsOpen(state => !state) 
    }

    useEffect(() =>{
        let currentUrl = Router.asPath;
        setCurrentUrl(currentUrl);
    }, [])

  return (
    <>
    <nav className={ activeFixedNav ? `${styles.header_page} ${styles.display_active}` : styles.header_page }>
        <section className={styles.logo_container}>
            <Link href={'/'} >
                <Image src={Logo} width={ activeFixedNav ? 100 : 120} height={activeFixedNav ? 40 : 50} alt='crowd for flipping logo' />
            </Link>
        </section>
        <section  className={styles.header_page_links_container}>

            {activeFixedNav ? (<>
                <section  
                    className={styles.header_page_links_container_burder_active}
                    onClick={() => _open()}
                >
                    <BurgerButton
                        _isOpen={_isOpen}
                    />
                </section>
                <motion.div 
                    className={styles.link_container}
                    initial={_isOpen}
                    variants={effects}
                    animate={_isOpen ? '_open' : '_close'}
                    transition={{delay: .1, duration: .1,  type: 'just', stiffness: 100}}

                >
                    <>
                    {linksContent.map((item, key) =>{
                        if(item.url === currentUrl) return
                        return(
                            <Link 
                                href={item.url}
                                key={key}
                                >
                                <motion.h3 
                                    initial={_isOpen}
                                    variants={effectsLink}
                                    animate={_isOpen ? 'open' : 'close'}
                                    transition={{delay: `.${key+2}`, duration: `.${key+2}`,  type: 'just', stiffness: 100}}
                                > 
                                    <span>{item.icon}</span>
                                    {item.span}
                                </motion.h3>
                            </Link> 
                        )
                    } )}
                    </>

                </motion.div>
            
            </>) : (
                <>
                {linksContent.map((item, key) => {
                    if(item.url === currentUrl)return
                    return(
                        <motion.div
                            key={key}
                            whileHover={{y: -7  }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        >
                            <Link 
                                href={item.url} 
                            >
                                <h3 className={activeFixedNav && `${styles.active_header}`}>
                                    <span className={styles.icon}>{item.icon}</span>
                                    {item.span}
                                </h3>
                            </Link>
                        </motion.div>
                    )
                } )}
                </>
            ) }

            <div className={styles.header_page_social_links_container}>
                <motion.a 
                    href='https://app.crowd4flipping.com' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <MdOutlineAccountCircle className={`${styles.icon} ${styles.face_icon}`}/>
                </motion.a>
                <motion.a 
                    href='https://www.facebook.com/Crowd4Flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <FaFacebookSquare className={`${styles.icon} ${styles.face_icon}`}/>
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/crowd4flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <Image 
                        src={InstagramIcon} 
                        className={`${styles.insta_icon}`}
                        width={40} 
                        height={40} 
                    />
                </motion.a>
            </div>
        </section>
        
        <section  
            className={styles.header_page_links_container_burger_container}
            onClick={() => open(!isOpen)}
        >
            <BurgerButton
                _isOpen={isOpen}
            />
        </section>

        <motion.div 
            className={styles.link_container}
            initial={isOpen}
            variants={effects}
            animate={isOpen ? 'open' : 'close'}
            transition={{delay: .1, duration: .1,  type: 'spring', stiffness: 100}}
        >
            {linksContent.map((item, key) => {
                if(item.url === currentUrl) return
                return(
                    <Link 
                        href={item.url}
                        key={key}
                        >
                        <motion.h3 
                            initial={isOpen}
                            variants={effectsLink}
                            animate={isOpen ? 'open' : 'close'}
                            transition={{delay: `.${key+2}`, duration: `.${key+2}`,  type: 'spring', stiffness: 100}}
                        > 
                            <span>{item.icon}</span>
                            {item.span}
                        </motion.h3>
                        </Link>
                    )
                })
            }
            <motion.a 
                    href='https://app.crowd4flipping.com' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <MdOutlineAccountCircle className={`${styles.icon} ${styles.face_icon}`}/>
            </motion.a>
            <motion.a 
                href='https://www.facebook.com/Crowd4Flipping' 
                target="_blank"
                rel="noreferrer" 
                whileHover={{y: -7  }}
                transition={{ duration: 0.3, type: "just", stiffness: 300 }}
            >
                <FaFacebookSquare className={`${styles.icon} ${styles.face_icon}`}/>
            </motion.a>
            <motion.a
                href='https://www.instagram.com/crowd4flipping' 
                target="_blank"
                rel="noreferrer" 
                whileHover={{y: -7  }}
                transition={{ duration: 0.3, type: "just", stiffness: 300 }}
            >
                <Image 
                    src={InstagramIcon} 
                    className={`${styles.insta_icon}`}
                    width={40} 
                    height={40} 
                />
            </motion.a>
        </motion.div>

    </nav>
        
    </>
  )
}

export default Header 
