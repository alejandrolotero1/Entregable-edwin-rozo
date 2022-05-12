/*---------------------------------------------------------*/
let validateEmail =document.getElementById("loginEmailValidate");
let validatePassword =document.getElementById("loginPasswordValidate");
let buttonLoginValidate = document.getElementById("buttonLogin");


import {arrayDatosEmail as newArrayEmail} from "./App.js";
import {arrayDatosPassword as newArrayPassword} from "./App.js"
console.log(newArrayEmail);
console.log(newArrayPassword);

// const arrayDatosEmail =["alejandro"];
// const arrayDatosPassword =["alejandr"];

if(buttonLoginValidate){
buttonLoginValidate.addEventListener("click",(event) =>{
// if (event.type = "click"){
        const value1 = validateEmail.value;
        const value2 = validatePassword.value;

        for(let i = 0;arrayDatosEmail.length > i; i++){
                if(value1 == arrayDatosEmail[i]){
                        let resultado = document.getElementById("resultLogin");
                        resultado.innerText = "login exitoso";
                }
                else{
                        let resultado = document.getElementById("resultLogin");
                        resultado.innerText = "login fallido";
                }
        }

        for(let i =0;arrayDatosPassword.length >i; i++){
                if(value2 == arrayDatosPassword[i]){
                        let resultado = document.getElementById("resultPassword");
                        resultado.innerText = "password exitoso";
                }

                else{
                        let resultado = document.getElementById("resultPassword");
                        resultado.innerText = "password fallido";
                }
        }

// }

// else{
//         const resultado = document.getElementById("resultLogin");
//         resultado.innerText = "unu";
// }
})
}