import React, {useState, useEffect, useRef} from 'react';
import styles from '../../styles/propiedades_form.module.scss';
import ReCAPTCHA from "react-google-recaptcha";
import Link from 'next/link';
import EllipsisLoader from '../loaders/ellipsisLoaderWhite';
import validate from './validate';
import Router from 'next/router';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {FaExclamationTriangle} from "react-icons/fa";

function PropertyForm({type, tag, _setSendData}) {
    
    const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api';
    const [captchaa, setCaptchaa] = useState(false);
    const captcha = useRef(null);
    const [sendData, setSendData] = useState(false);
    const [errors, setErrors] = useState({initial : 'initial'});
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        M2:'',
        floor: '',
        rooms:'',
        bathrooms: '',
        state: '', 
        created: new Date(),
        termsAndConditions: false,
        type: type, 
        tag: tag
    })

    const handleStateChange = (e) =>{
        const {name} = e.target 
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [name] : value
        })
        setErrors(validate(state))
    }

    const onChangeCaptcha = () =>{
        if(captcha.current.getValue()){ 
            setCaptchaa(true)
        }
    };

    const handleSubmit = () =>{
        setErrors(validate(state))
        setSendData(true)

    }

    const sendContact = async (data) =>{
        _setSendData(true)
        try {
            let res = await axios.post(`${api}/contact`, data);
            if(res.data.status === 200){
                Router.push('/thanks-owner-property');
                setSendData(false)
                _setSendData(false)

            }
        } catch (error) {
            setSendData(false)
            _setSendData(false)
        }
    };

    useEffect(()=>{
        if(!sendData) return  
        if(Object.keys(errors).length > 0){
            toast.error('Ups, parece que te hace falta completar algunos datos.')
            setSendData(false);
            return
        }
        if(!captchaa){
            toast.error('Confirma que no eres un bot.');
            setSendData(false);
            return
        }
        sendContact(state);
    },[sendData]);

  return (
    <div className={styles.form_container}>
        <h1>  
            Solicita información y <span>descubre la forma más rentable</span> de sacar provecho de tu propiedad 
        </h1>
        <div
            className={styles.input_container}
        >
            <span>Nombre</span>
            <input 
                type="text"
                required
                value={state.name}
                name='name'
                onChange={handleStateChange}
            />
            {errors.name && 
                <p 
                    className={styles.errorInput}
                >
                    <FaExclamationTriangle/>
                    {errors.name}
                </p>
            }
        </div>
        <div
            className={styles.input_container}
        >
            <span>Email</span>
            <input 
                type="email" 
                required
                value={state.email}
                name='email'
                onChange={handleStateChange}
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
        <div
            className={styles.input_container}
        >
            <span>Teléfono</span>
            <input 
                type="tel" 
                inputmode="numeric"
                required
                value={state.phone}
                name='phone'
                onChange={handleStateChange}
            />
            {errors.phone && 
                <p 
                    className={styles.errorInput}
                >
                    <FaExclamationTriangle/>
                    {errors.phone}
                </p>
            }
        </div>
        <div
            className={styles.input_container}
        >
            <span>Dirección de la propiedad</span>
            <input 
                type="text" 
                required
                value={state.address}
                name='address'
                onChange={handleStateChange}
            />
        </div>
        <div
            className={styles.input_container}
        >
            <span>Dimensiones de la propiedad</span>
            <select
                value={state.M2}
                name='M2'
                required
                onChange={handleStateChange}
            >
                <option defaultValue={''}></option>
                <option value="60m2-80m2">
                    Entre 60m2 y 80m2
                </option>
                <option value="80m2-100m2">
                    Entre 80m2 y 100m2
                </option>
                <option value="100m2-120m2">
                    Entre 100m2 y 120m2
                </option>
                <option value="+120m2">
                    Más de 120m2
                </option>
            </select>
        </div>
        <div
            className={styles.input_container}
        >
            <span>Planta</span>
            <input 
                type="number" 
                inputmode="numeric"
                min="1" 
                pattern="^[0-9]+"
                required
                value={state.floor}
                name='floor'
                onChange={handleStateChange}
            />
        </div>
        <div
            className={styles.input_container}
        >
            <span>Número de habitaciones</span>
            <input 
                type="number" 
                inputmode="numeric"
                min="1" 
                pattern="^[0-9]+"
                required
                value={state.rooms}
                name='rooms'
                onChange={handleStateChange}
            />
        </div>
        <div
            className={styles.input_container}
        >
            <span>Número de baños</span>
            <input 
                type="number"
                inputmode="numeric"
                min="1" 
                pattern="^[0-9]+"
                required
                value={state.bathrooms}
                name='bathrooms'
                onChange={handleStateChange}
            />
        </div>
        <div
            className={styles.input_container}
        >
            <span>Estado de la propiedad</span>
            <select
                value={state.state}
                name='state'
                required
                onChange={handleStateChange}
            >
                <option defaultValue={''}></option>
                <option value="Buen estado">
                    Buen estado, se puede entrar a vivir
                </option>
                <option value="A reformar">
                    A reformar
                </option>
                <option value="Necesita lavado de cara">
                    Necesita solo un lavado de cara
                </option>
            </select>
        </div>
        <div className={styles.input_container_checkbox}>
            <input 
                type="checkbox" 
                name='termsAndConditions' 
                value={state.termsAndConditions} 
                onChange={handleStateChange} 
            />
            <p>Autorizo el tratamiento de mis datos para recibir una respuesta a mi consulta según la       <Link href='/docs/aviso-legal'>Política de Privacidad</Link>    
            </p>  
           
        </div>
        {errors.termsAndConditions && 
                <p 
                    className={styles.errorInput}
                >
                    <FaExclamationTriangle/>
                    {errors.termsAndConditions}
                </p>
            }   
        <div className={styles.input_container_checkbox}>
        <ReCAPTCHA
            ref={captcha}
            sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
            onChange={onChangeCaptcha}
        />
        </div>
        <div className={styles.input_container}>
            {!sendData ? (
                <div className={styles.button} onClick={() => handleSubmit()} >
                    Enviar
                </div>
            ):
            (
                <div className={styles.button}>
                    <EllipsisLoader/>
                </div>
            )}
        </div>
    <Toaster />
    </div>
  )
}

export default PropertyForm
