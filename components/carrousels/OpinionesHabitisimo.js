import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styles from  '../../styles/carrousels.module.scss'

const data = [
    {
      date: `hace 1 mes`, 
      name:`Pedro Vilajoana`,
      text: `He marcado excelente porque así ha sido:
      Excelente a la realización del contrato.
      Excelente a la ejecución.
      Excelente ante un cambio de visión en tiempo real de determinados trabajos.
      Excelente velocidad de reacción.
      Excelente experiencia y consejo profesional de Alex.
      Excelente hasta el ultimo momento, sin sorpresas de último minuto.
      Excelente pulcritud en la recogida y limpieza del área de trabajo.
      Excelente en cumplimiento de plazos.
      Por supuesto contaré con ellos para el próximo proyecto.`
    },
    {
      date: `Hace 1 mes`, 
      name:`Tanit Iglesias`,
      text: `Profesionalidad, formalidad, pulcritud, solo tengo palabras de reconocimiento hacia Alex, dudo que hayan mejores profesionales en la isla. Un trabajo impecable y un trato excelente.`
    },
    {
      date: `hace 3 meses`, 
      name:`Marta`,
      text: `Hola, soy una fisioterapeuta de Son Espases, hace un año compré un piso para reformar integramente en Palma. Contacté varias empresas, incluso algún particular que no me dio ninguna confianza. Por suerte encontré esta pagina web y decidí realizar un presupuesto con Refcon; desde el principio todo fue maravilloso y tengo que decir que ha sido así hasta el final, 100% recomendable para cualquier trabajo.`
    },
    {
      date: `hace 5 meses`, 
      name:`Carol`,
      text: ` Contacto rapido, amable. Nos asesoro bien dando soluciones en reforma. Buen trabajo, serios, amables y buenos acabados en los detalles. Cumplieron con las fechas, calidad-precio muy bien. Buenos profesionales. Cuando tengamos otra reforma volveremos a contar con ellos.`
    },
    {
      date: `hace 7 meses`, 
      name:`Cristina`,
      text: ` Lo primero de todo agradecer profundamente la amabilidad y la profesionalidad de Alex, Víctor y todo su equipo. Han realizado una reforma integral de nuestra vivienda y ha quedado maravillosamente bien, estamos felices con nuestro nuevo hogar y son 100% recomendables..hemos tenido mucha suerte de haber contado con ellos.`
    },
    {
      date: `hace 9 meses`, 
      name:` Xisco González`,
      text: ` Empresa muy profesional, se adaptan a las necesidades del cliente, asesoran y cumplen con lo acordado. Relacion calidad precio excelente. Muy recomendable.`
    },
    {
      date: `hace 1 año`, 
      name:` Yazmina`,
      text: `Hemos hecho una reforma con Refcon.
  
      El trato humano y la profesionalidad ha sido excelente así como finalmente el trabajo realizado.`
    },
    {
      date: `hace 1 año`, 
      name:`Marti`,
      text: `Conocímos a Álex a través de esta página. Teníamos que hacer una gran reforma, nuestra primera reforma, y teníamos miedo a no poder con todo. Gracias a Refcon, y a Víctor y Álex en particular la reforma ha ido de maravilla. Se han ajustado exactamente a los tiempos que nos dijeron y casi no ha habido desvío en el presupuesto (En una reforma grande es normal que haya alguna sorpresa). Estamos muy contentos con el resultado final. La verdad es que hemos construido la casa que queríamos y todo gracias a su gran equipo.`
    },
    {
      date: `hace 1 año`, 
      name:` Gabriel`,
      text: `Molt bona feina, serietat i compliment dels plassos pactats`
    },
    {
      date: `hace 1 año`, 
      name:`Maria`,
      text: `Un trabajo inmejorable. Se han preocupado de todo ellos y nosotros nos hemos desentendido. Han hecho muy buen trabajo en la reforma entera de nuestro piso. Siempre antentos y serviciales. Gracias refcon!`
    },
    {
      date: `hace 1 año`, 
      name:`Xuejun`,
      text: `Lo más importante es que cumple con las fechas que te dice, sin perder nada en la calidad del trabajo`
    },
  ]

  
  function Example(props)
  {
      return (
          <Carousel
            className={styles.carrousel_container}
          >
              {
                  data.map( (item, i) => <Item key={i} item={item} /> )
              }
          </Carousel>
      )
  }
  
  function Item(props)
  {
      return (
          <Paper 
              className={styles.paper}
          >
              <h2>{props.item.name}</h2>
              <p>{props.item.text}</p>  
          </Paper>
      )
  }

  export default Example;