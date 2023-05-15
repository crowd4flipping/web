import React, {useState, useEffect} from 'react'
import styles from '../../styles/NewsLetter.module.scss';
import {motion} from 'framer-motion';
import GreenButton from '../buttons/GreenButton';
import validate from './validateOnlyEmail';
import {FaExclamationTriangle} from "react-icons/fa";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../loaders/BlocksLoader';
import {GiMailbox} from 'react-icons/gi'

function NewsLetterSuscription({width}) {

    const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api';
    const [errors, setErrors] = useState({init: 'init'});
    const [submit, setSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [state, setState] = useState({
        email: '',
        type:'Blog', 
        tag: '83',
        created: new Date()
    })

    const hanldeChange = (e) =>{
        let {name, value } = e.target;
        setState({
            ...state,
            [name] : value
        })
    }

    const setSuscription = () =>{
        setErrors(validate(state))
    }

    const submitEmail = async () =>{
        setSubmit(true)
        try {
            let res = await axios.post(`${api}/contact`, state);
            if(res.status === 200){
                setSubmit(false)
                setSuccess(true)
            }
            return res; 
        } catch (error) {
            setSubmit(false)
        }
    }

    useEffect(() =>{
        if(Object.keys(errors).length > 0) return
        let res = submitEmail();
        toast.promise(res, {
            loading: 'Enviando...',
            success: 'Suscrito.', 
            error: 'Ups! Algo ha ido mal.'
        })
    }, [errors] )

  return (
    <motion.div 
        className={styles.suscription_card}
        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
        whileHover={{ 
            y: -10,
            boxShadow: '1px 1px 4px #131515',
        }}
    >
        <div className={width === 'blog_page' ? `${styles.suscription_card_header} ${styles.suscription_card_header_blog_page}` : styles.suscription_card_header}>
            <h1> Suscríbete y recibe las últimas actualizaciones </h1>
        </div>
        {!success ? (
            <>
                <div className={styles.suscription_card_boddy}>
                <input 
                    placeholder='Email'
                    type='emamil'
                    name='email'
                    value={state.email}
                    onChange={hanldeChange}
                />
                {errors.email && 
                    <p 
                        className={styles.errorInput}
                    >
                        <FaExclamationTriangle/>
                        {errors.email}
                    </p>
                }
                </div>
                <div className={styles.suscription_card_footer}>
                    {submit ? (<Loader />) : (
                        <div 
                            onClick={() => setSuscription()}
                            className={styles.suscription_card_button_container}
                        >
                            <div 
                                className={styles.suscription_card_button}
                            >
                                <span>Suscribirme</span>
                            </div>
                        </div>
                    )}
                </div></>
        ) : (
            <motion.div 
                className={styles.suscription_card_success}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.75,
                }}
            >
                <GiMailbox />
                <span>
                    Hola, gracias por la suscripción, recibirás pronto nuevas oportunidades.
                </span>
            </motion.div>
        )}
    </motion.div>
  )
}

export default NewsLetterSuscription
