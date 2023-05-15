import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loader from '../loaders/ellipsisLoaderWhite';
import styles from '../../styles/project_page.module.scss';

export default function Index({lat, lng}) {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : "AIzaSyD2kpXyja6687fydpcpuT_DkkEqvnFfqWQ"
    });
    if(!isLoaded) return ( <><h1>Cargando mapa...</h1> <Loader /> </> )

  return (
    <GoogleMap
            zoom={13}
            center={{lat: lat, lng: lng}}
            mapContainerClassName={styles.project_map_container}
        >
            <Marker position={{lat: lat,  lng: lng}}/>
    </GoogleMap>
  )
}
 