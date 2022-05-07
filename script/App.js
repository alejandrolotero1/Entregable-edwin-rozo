miStorage = window.localStorage;
let inputName = document.getElementById("inputNombreCompleto");
let inputPhone = document.getElementById("inputPhone");
let inputEmailPerson = document.getElementById("emailPerson");
let inputPassword = document.getElementById("inputContraseña");
let inputPasswordV=document.getElementById("inputContraseñaVerificacion");
let alert = document.getElementById("alertaError");
let button = document.getElementById("eventButton");
/*-----------------Almacenar datos-----------*/
const arrayDatos =[];

function almacenarDatos(value1, value2){
    return arrayDatos.unshift(value1,value2)
}


/*-------------------Name--------------------*/
inputName.addEventListener("keyup",(event) =>{

    let text = event.target.value;
    let resultVoid = "";
    usuario = /^[a-zA-Z\s]{1,50}$/;

    if (usuario.test(text)){
        resultVoid = "";
    }

    else{
        resultVoid = "Solo se permite ";
    }

    if(text.length === 0){
        resultVoid = "Son obligatorios todos los campos";
    }
    document.getElementById("alertaError").innerText = resultVoid;

})
/*---------------------Tel----------------------*/
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
/*--------------------Email--------------------*/
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
/*----------------------Password------------------------*/
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
function aux (var1, var2){
    if (var1 == var2){
        let text ="";
        return text
    }

    else{
        let text="Error las contraseñas no coinciden";
        return text
    }
}


/*----------------------PasswordV------------------------*/
button.addEventListener("click",(event) =>{

    if (event.type = "click"){

        const value1 = inputPassword.value;
        const value2 = inputPasswordV.value;

        const aux1 = aux(value1, value2);

        const resultado = document.getElementById("alertaErrorContraseñasValidacion");
        resultado.innerText = aux1;

        const valor1 = inputEmailPerson.value;
        const valor2 = inputPassword.value;
        const alm = almacenarDatos(valor1, valor2);
        console.log(arrayDatos);
    }
    else{
        document.getElementById("alertaErrorContraseñasValidacion").innerText = "";
    }
})
/*-----------------------------------------------------*/













