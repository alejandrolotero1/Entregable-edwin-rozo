
let inputName = document.getElementById("inputNombreCompleto");
let inputPhone = document.getElementById("inputPhone");
let inputEmailPerson = document.getElementById("emailPerson");
let inputPassword = document.getElementById("inputContraseña");
let inputPasswordV=document.getElementById("inputContraseñaVerificacion");
let button = document.getElementById("eventButton");
/*---------------------------------------------------------*/
/*-----------------Almacenar datos-----------*/
export const arrayDatosEmail =["alejandro@gmail.com"];
export const arrayDatosPassword =["alejandro317278373"];



// //Exportar almacenamiento de arrayDatosEmail a la otra plantilla
// export const newArrayEmail =arrayDatosEmail.map(function(current){
//     return current * 2;
// })

// //Exportar almacenamiento de arrayDatosPassword a la otra plantilla
// export const newArrayPassword = arrayDatosPassword.map(function(current){
// return current * 2;
// })





function almacenarDatos(value1, value2){
    return (arrayDatosEmail.push(value1)),(arrayDatosPassword.push(value2))
}

/*-------------------Name--------------------*/
if(inputName){
inputName.addEventListener("keyup",(event) =>{

    let text = event.target.value;
    let resultVoid = "";
    usuario = /^[a-zA-Z\s]{1,50}$/;

    if (usuario.test(text)){
        resultVoid = "";
    }

    else{
        resultVoid = "Solo se permite letras en este campo.";
    }

    if(text.length === 0){
        resultVoid = "El campo es obligatorio";
    }
    document.getElementById("alertaError").innerText = resultVoid;

})
}

/*---------------------Tel----------------------*/
if(inputPhone){
inputPhone.addEventListener("keyup", (event)=>{
    let num = event.target.value;
    let resultVoid = "";
    let number = /^[1-9\s]{8,10}$/;

    if (number.test(num)){
        resultVoid ="";
    }

    else{
        resultVoid = "Solo numeros permitidos en este campo";
    }

    document.getElementById("alertaErrorTelefono").innerText = resultVoid;

})
}
/*--------------------Email--------------------*/
if(inputEmailPerson){
inputEmailPerson.addEventListener("keyup" , (event =>{

    let email = event.target.value;
    let resultVoid = "";

    let emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(emailValidation.test(email)){
        resultVoid ="";
    }

    else{
        resultVoid="Solo son permitidos emails.";
    }

    document.getElementById("alertaErrorEmail").innerText = resultVoid;
}))
}


/*----------------------Password------------------------*/
if(inputPassword){
inputPassword.addEventListener("keyup",(event) =>{
    let text =event.target.value;
    let resultVoid = "";

    let passportValidation =/^.{8,8}$/;

    if(passportValidation.test(text)){
        resultVoid = "";
    }

    else{
        resultVoid ="Error deben ser minimo 8 caracteres";
    }

    document.getElementById("alertaErrorContraseñas").innerText =resultVoid;

})
}
/*--------------------------------------------------------------------*/
function aux (var1, var2){
    if (var1 == var2){
        let text ="";
        return text
    }

    else{
        let text="Error las contraseñas no coinciden";
        return text;
    }
}

/*---------------------------------------------------------------------------*/



/*----------------------PasswordValidate------------------------*/
if(button){
button.addEventListener("click",(event) =>{

    // if (event.type = "click"){
        //compara contraseñas
        const value1 = inputPassword.value;
        const value2 = inputPasswordV.value;

        const aux1 = aux(value1, value2);

        const resultado = document.getElementById("alertaErrorContraseñasValidacion");
        resultado.innerText = aux1;

        //almacenar datos
        const valor1 = inputEmailPerson.value;
        const valor2 = inputPassword.value;
        const alm = almacenarDatos(valor1, valor2);
        console.log(arrayDatosEmail);
        console.log(arrayDatosPassword);

        // console.log(newArrayEmail);
        // console.log(newArrayPassword);
    // }
    // else{
    //     document.getElementById("alertaErrorContraseñasValidacion").innerText = "";
    // }
})
}
/*-----------------------------------------------------*/

// buttonLg.addEventListener("click",(event) =>{

// if(event.type ="click"){
//         const value1 = validateEmail.value;
//         const value2 = validatePassword.value;
//         const aux =validarDatos(value1, value2);
//         document.getElementById("resultLogin").innerText = aux;

// //         const value1 = validateEmail.value;
// //         const value2 = validatePassword.value;
//  }
// })

// buttonLoginValidate.addEventListener("click",(event) =>{

//     if (event.type = "click"){
//         const value1 = validateEmail.value;
//         const value2 = validatePassword.value;
//         const aux = validarDatos(value1 ,value2);

//         const resultado = document.getElementById("resultLogin");
//         resultado.innerText = aux;
//         console.log(aux);
//     }
//     else{
//         const resultado = document.getElementById("resultLogin");
//         resultado.innerText = "unu";
//     }
// })


