import React, {useState, useEffect} from 'react';
import styles from '../../styles/forms.module.scss';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GreenRadio from './inputs/InputRadio';
import { motion } from 'framer-motion';
import { postal_codes } from '../../data/postal_codes';
import EllipsisLoader from '../loaders/ellipsisLoaderWhite';
import axios from 'axios';
import Router from 'next/router';
 
const OwnerForm =  ({type, tag}) => {

    /* const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api';  */
    const api = 'http://localhost:5000/crowd4flipping-app/us-central1/app/api'; 
    const [sendData, setSendData] = useState(false);
    const [state, setState] = useState({
        name: '', 
        email: '',
        phone: '',
        created: new Date(),
        saleDate: '',
        type: type, 
        tag: tag,
        zip: '', 
        step: 0
    });

    const handleChange = (e) =>{
        let value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
            step: state.step === 0 ? state.step + 1 : state.step
        })
    };

    const sendContact = async (data) =>{
        try {
            let res = await axios.post(`${api}/contact`, data);
            console.log(res)
            if(res.data.status === 200){
                setSendData(false)
                Router.push('/thanks-owner')
            }
        } catch (error) {
            console.log(error.message);
            setSendData(false)
        }
    };

    useEffect(()=>{
        if(!sendData)return
        sendContact(state);
    },[sendData]);

switch(state.step){
    case 0: 
    return(
        <div className={styles.OwnerForm}>
            <h1> ¿Cuando quieres <span>vender</span>?</h1>
            <motion.div 
                className={styles.radio_group}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.2,
                duration: 0.75,
                }}
            >
                <RadioGroup 
                    aria-label="saleDate"               
                    name="saleDate" 
                    value={state.saleDate} 
                    onChange={handleChange}
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "left",
                        gap: "1rem",
                    }}
                >
                    <FormControlLabel
                        className={state.saleDate === "Ya está a la venta" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="Ya está a la venta"
                        control={<GreenRadio/>} 
                        label="Ya está a la venta"
                    />
                    <FormControlLabel
                        className={state.saleDate === "Lo antes posible" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="Lo antes posible"
                        control={<GreenRadio/>} 
                        label="Lo antes posible"
                    />
                    <FormControlLabel
                        className={state.saleDate === "En 3 meses" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="En 3 meses"
                        control={<GreenRadio/>} 
                        label="En 3 meses"
                    />
                    <FormControlLabel
                        className={state.saleDate === "En 6 meses o más" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="En 6 meses o más"
                        control={<GreenRadio/>} 
                        label="En 6 meses o más"
                    />
                    <FormControlLabel
                        className={state.saleDate === "Quisiera asesorarme primero" ? `${styles.option} ${styles.bgFull}` : styles.option}
                        value="Quisiera asesorarme primero"
                        control={<GreenRadio/>} 
                        label="Quisiera asesorarme primero"
                    />
                </RadioGroup>
            </motion.div>
        </div> 

    );
    case 1:
        return (
            <motion.div 
                className={styles.OwnerForm}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.2,
                duration: 0.75,
                }}
            >
                <h1> ¿Cómo podemos <span>contactar</span>? </h1>
                <br/>
                <div className={styles.owner_form_container}>
                    <div className={styles.input_container}>
                        <input 
                            type='text' 
                            name='name' 
                            value={state.name}  
                            onChange={handleChange}
                            placeholder='Nombre...'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            type='text'
                            name='email'
                            value={state.email}
                            onChange={handleChange}
                            placeholder='Email...'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            type='text'
                            name='phone'
                            value={state.phone} 
                            onChange={handleChange}
                            placeholder='Número...'
                        />
                    </div>
                    <div className={styles.input_container}>
                        <input 
                            type="text"
                            list="zip_list" 
                            name='zip' 
                            value={state.zip} 
                            onChange={handleChange} 
                        placeholder='Cosdigo postal'
                        /> 
                        <datalist id="zip_list">
                            {postal_codes.map((zip, index) =>{
                                return(
                                    <option key={index} value={zip} />
                                )
                            })}
                        </datalist>
                    </div>
                    <div className={styles.input_container}>
                        <div 
                            className={styles.button} 
                            onClick={() => setSendData(true)}
                        >
                            {!sendData ? 
                                'Enviar' 
                            : 
                            <>
                                <EllipsisLoader/>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

}

export  default OwnerForm;

