import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/forms.module.scss';
import axios from 'axios';
import Router from 'next/router'
import EllipsisLoader from '../loaders/ellipsisLoaderWhite';
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';
import {motion} from 'framer-motion';
import BlocksLoader from '../loaders/BlocksLoader';

function InvestmentForm({type, tag, urlThanks}) {

    const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api'; 
    const [sendData, setSendData] = useState(false);
    const [captchaa, setCaptchaa] = useState(false);
    const captcha = useRef(null);
    const fromWeb = 'fw'
    const [state, setState] = useState({
        name: '',  
        email: '',
        phone: '', 
        comments: '',
        termsAndConditions: false, 
        type: type,
        tag: tag,
        created: new Date()
    });
    
    const handleChange = (e) =>{
        e.preventDefault();
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name] : value
        })
    };

    const onChangeCaptcha = () =>{
        if(captcha.current.getValue()){ 
            setCaptchaa(true)
        }
    };

    const sendContact = async (data) =>{
        try {
            let res = await axios.post(`${api}/contact`, data);
            if(res.data.status === 200){
                setSendData(false)
                Router.push(urlThanks)
            }
        } catch (error) {
            setSendData(false)
        }
    }

    const handleSubmit = () =>{
        if(!captchaa || !state.termsAndConditions){
            alert('Debe validar su información')
            return setSendData(false);
        }
        setSendData(true)
    }

    useEffect(()=>{
        if(!sendData)return
        sendContact(state);
    },[sendData])

  return (
    <div className={styles.InvestmentForm}>
        <div className={styles.investment_form_container}>
            <div className={styles.input_container}>
                <input type='text' name='name' value={state.name} placeholder='Nombre' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='email' value={state.email} placeholder='Email' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <input type='text' name='phone' value={state.phone} placeholder='Teléfono' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <textarea type="text"  name='comments' value={state.comments} onChange={handleChange} placeholder='Déjanos tus comentarios'/> 
            </div>
            <div className={`${styles.input_container} ${styles.input_container_checkbox}`}>
                <input 
                    type="checkbox" 
                    name='termsAndConditions' 
                    value={state.termsAndConditions} 
                    onChange={handleChange} 
                />
                <p>Autorizo el tratamiento de mis datos para recibir una respuesta a mi consulta según la <Link href='/docs/aviso-legal'>Política de Privacidad</Link>    
                </p>    
            </div>
            <div className={`${styles.input_container} ${styles.input_container_checkbox}`}>
            <ReCAPTCHA
                ref={captcha}
                sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
                onChange={onChangeCaptcha}
            />
            </div>
            {sendData ? (<BlocksLoader />) : (
                <>
                    <div className={styles.input_container}>
                        <div className={styles.button} onClick={() => handleSubmit()} >
                            Enviar 
                        </div>
                    </div>
                    <a href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                        <motion.div 
                            className={`${styles.button} ${styles.green_bg_button}`}
                            whileHover={{y: -7  }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                        >Regístrate gratis
                        </motion.div>
                    </a>
                </>
            )}
        </div>
    </div>
  )
}

export default InvestmentForm
