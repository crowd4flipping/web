import { fontSize } from '@mui/system'
import React from 'react'

function Email() {
  return (
    <div
        style={{
            width:'100%',
            padding: ' 1rem'
        }}
    >
        <img 
            style={{
                width: '100%'
            }}
            src='https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/corporatives-images%2FCrowd4Flipping.png?alt=media&token=099adb87-325f-454f-87a4-20bb827ec1f4'
            
        />

        <p>
            <strong> 
                ¡Bienvenid@ a Crowd4Flipping!
            </strong>
        </p>
        <br/>
        <p>Has registrado tu cuenta de Crowd4Flipping correctamente y está casi lista. <strong>¡Enhorabuena!</strong>
        <br/>
            Ahora solo queda un pasó más. <strong>Verifica tu dirección de email haciendo click en el siguiente enlace</strong>: 
        </p>
        <br/>
        <br/>
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >

            <a href='${link}'
                target="_blank"
                rel="noreferrer"
            >
                <button
                    style={{
                        width: 'fit-content',
                        padding: '.5rem',
                        backgroundColor: '#00c3ff',
                        border: 'none',
                        borderRadius: '7px',
                        boxShadow: '1px 1px 2px #252525',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: 'white'
                    }}
                > 
                    Verificar correo electrónico aquí
                </button>
            </a>

        </div>
        <br/>
        <br/>
        <p>
        ¡Allí nos vemos!
        Seguimos creciendo y sumando proyectos a tu lado ¡Gracias por confiar en nosotros!
        Recuerda que si necesitas nuestra ayuda o tienes una consulta, estaremos encantados de ayudarte. Únicamente tendrás que escribirnos por &nbsp;
        <br/>
        <br/>
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <a  
                href='https://wa.me/34672126268?text=Hola'
                target="_blank"
                rel="noreferrer">
                <button
                    style={{
                        width: 'fit-content',
                        padding: '.5rem',
                        backgroundColor: '#25d366',
                        border: 'none',
                        borderRadius: '7px',
                        boxShadow: '1px 1px 2px #252525',
                        fontSize: '1rem',
                        fontWeight: '500',
                        color: 'white'
                    }}
                > 
                        WhatsApp clicando Aqui

                    </button>
            </a>  
        </div>
        <br/>
        <br/>
        <strong> ¡Estaremos encantados de ayudarte en lo que necesites!
        Un saludo de parte de todo el equipo de Crowd4Flipping. </strong>
        </p>
        
    </div>
  )
}

export default Email
