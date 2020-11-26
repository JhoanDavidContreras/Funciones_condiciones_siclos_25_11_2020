// let edad = prompt("Ingrese su edad");

// if(edad >= 18){
//     alert("Usted es mayor de edad");
// }else{
//     alert("Usted es menor de edad");
// }

// let tarjeta = true;

// if(tarjeta != true){
//     alert("entro por la puerta");
// }else{
//     alert("no pudo entrar a la puerta");
// }


// let datos = true;
// let datos2 = false;
// if(datos === datos2){
//     alert("Entro el datos");
// }else{
//     alert("el dato no entro");
// }



// let tarjeta = false;

// if(tarjeta !== false){
//     alert("entro por la puerta");
// }else{
//     alert("no pudo entrar a la puerta");
// }


// let num = prompt("Ingrese un numero mayor que (10)");

// if(num > 10){
//     alert("El numero ingresado es : "+num+" y es mayor a 10");
// }else{
//     alert("El numero no es el correcto");
// }


// let num = prompt("Ingrese un numero mayor que (10)");
// if(num >= 10){
//     alert("El numero ingresado es : "+num+" y es mayor o igual 10");
// }else{
//     alert("El numero no es el correcto");
// }


// let num = prompt("Ingrese un numero menor que (10)");
// if(num < 10){
//     alert("El numero ingresado es : "+num+" y es menor que 10");
// }else{
//     alert("El numero no es el correcto");
// }


// let num = prompt("Ingrese un numero menor que (10)");
// if(num <= 10){
//     alert("El numero ingresado es : "+num+" es menor o igual que 10");
// }else{
//     alert("El numero no es el correcto");
// }


//Operadores condicion AND
// let a = false;
// let b = false;

// if(a &= b){
//     alert(true);
// }else{
//     alert(false);
// }

//Operadores condicion OR
// let a = false;
// let b = false;

// if(a |= b){
//     alert(true);
// }else{
//     alert(false);
// }


//Operadores condicion XOR
// let a = true;
// let b = false;

// if(a ^= b){
//     alert(true);
// }else{
//     alert(false);
// }



// let edad = prompt("Ingrese su edad");

// if(edad == 18){ //si
//     alert("Cumplio los 18 y es mayor de edad");
// }else if( (edad >= 19) && (edad <= 20) ){  //si no
//     alert("es mayor de edad y es menor a 20");
// }else if( (edad >= 21) && (edad <= 25) ){  //si no
//     alert("es mayor de edad y es menor a 25");
// }else{  //no
//     alert("es menor de edad");
// }



function jhoan(plata,opcion){
    let pan = 1000;
    let salchichon = 500;
    let vueltos;
    switch (opcion) {
        case "pagar pan":
            vueltos = plata-pan;
            break;
        case "pagar salchichon":
            vueltos = plata-salchichon;
            break;
        case "pagar todo":
            vueltos = plata-pan;
            vueltos -= salchichon;
            break;
        default:
            vueltos = plata;
            break;
    }
    return vueltos;
}


alert("Mi vueltos son: "+jhoan(2000,"pagar pan"));



