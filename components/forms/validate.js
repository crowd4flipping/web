export default function validate(values){ 
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Nombre requerido"
    }
    if(!values.email){
        errors.email = "Email requerido"
    } else if (!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(values.email)) {
        errors.email = 'La dirreción de email es invalida';
    }

    if(!values.phone){
        errors.phone = 'Número requerido'
    }


    if(!values.termsAndConditions){
        errors.termsAndConditions = 'Debes aceptar los terminos y condiciones.'
    }
   return errors;
}