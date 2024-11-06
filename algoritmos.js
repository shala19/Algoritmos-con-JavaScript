
//1. Agoritmo que calcula la suma entre 2 valores ingresados por el usuario
function suma(){

    // Se declaran las variables necesarias para este algoritmo
    let numero1;
    let numero2;
    let suma;

    // Pedimos los valores al usuario
    numero1 = parseInt(prompt('Ingrese el primer valor a sumar: '));
    numero2 = parseInt(prompt('Ingrese el segundo valor a sumar: '));

    // Calculamos la suma
    suma = numero1 + numero2;
    console.log(`El resultado de la suma es ${suma}`);
    alert(`El resultado de la suma es ${suma}`)
}

// 2. Algortimo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario

function operacionesMatematicas(){
    // Definimos las variables a utilizar
    let numero1 = parseInt(prompt('Ingresa el primer número: '));
    let numero2 = parseInt(prompt('Ingrese el segundo número: '));

    // Realizamos las respectivas operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    // Imprimimos los resultados por pantalla
    alert(`El resultado de la suma es ${suma}, el resultado de la resta es ${resta}, el resultado de la multiplicacion es ${multiplicacion} y el resultado de la division es ${division}`);
}

// 3. Algoritmo que determnie el cuadrado de un número el cual ingresa el usuario los datos

function cuadrado() {
    // Definicion de variables 
    let a;
    let c;
    //pedimos los valores
    a= parseInt(prompt("Ingrese el valor a operar: "));
    // Proceso de cuadrado
    c= a**2;
    // Imprime el proceso
    alert("El resultado es: "+c);
    
}

// 4. Algoritmo que determina el área de un triángulo apartir de la base y la altura ingresados por el usuario

function areat() {
    // Definicion de variables 
    let b =parseInt(prompt("Ingrese la base del triángulo: "));
    let a= parseInt(prompt("Ingrese la altura del triángulo: "));
    let at;
    // Proceso de área
    at= b*a/2;
    // Imprime el resultado 
    alert ("El área del triángulo es: "+at); 
}

// 5. Algoritmo que determine las pulgadas y los metros de un valor ingresado en cm 

function convertir() {
    // Declarar variables
    let cm= parseInt(prompt("Ingrese las unidades en cm: "));
    let p=2.54;
    let m= 100;
    let pulgada;
    let metros;
    // Realizar procedimiento
    pulgada= cm/p;
    metros=cm/m;
    // Imprimir el resultado
    alert("El calculo en pulgadas es: "+pulgada+" el calculo en metros es: "+metros);   
}

// 6. Algoritmo que determine el número mayor de dos numeros ingresados por el usuario

function mayor() {
    // Declaracion de variables e inicialización
    let a = parseInt(prompt("Ingrese el primer numero: "));
    let b = parseInt(prompt("Ingrse el segundo numero: "));
    // Procedimiento del número mayor
    if (a>b){
        alert("El numero "+a+" es mayor que "+b);
    }
    else if (b>a){
        alert("El numero "+b+" es mayor que "+a)
    }
    else{
        alert("Los numeros son iguales")
    }    
}

// 7. Algoritmo que determine el número menor de tres números ingresados por el usuario

function menor() {
    // Declaración de varibales e inicialiazación
    let a =parseInt(prompt("Ingrse el primer numero: "));
    let b =parseInt(prompt("Ingrse el segundo numero: "));
    let c =parseInt(prompt("Ingrse el tercer numero: "));
    // Proceso de menor
    if ((a<b ) && (a<c)) {
        alert("El número "+a+" es el menor entre "+b+" y "+c);
    }
    else if ((b<a)&&(b<c)){
        alert ("El número "+b+" es el menor entre "+a+" y "+c);
    }
    else if((c<a)&&(c<b)){
        alert ("El número "+c+" es el menor entre "+a+" y "+b);
    }
    else{
        alert("Ningun número es menor todos son iguales");
    }
    
} 

// 8. Algoritmo que solicite al estudiante su nombre , la materia y ocho calificaciones de la misma entre 1 y 10 determinar con esta informacion
// si el estudiante aprobo o reprobo teniendo en cuenta que si aprueba con 6.2 en adelante

function nota() {
    // Declaración de varibales e inicialiazación
    let name=prompt("Ingrese su nombre: ");
    let materia= prompt("Ingrse el nombre de la materia: ");
    let notas=[];
    let s= 0;
    for(let i=0; i<8;i++){
        let nota=parseInt(prompt("Ingrese la nota: "));
        while(isNaN(nota) ||nota<0||nota>10){
            nota=parseInt(prompt(`Ingrese una nota valida (0-10): `));
        }
        notas.push(Number(nota));
        s+= nota;
    }
    // Proceso de calculo de promedio
    p= s/8;
    // Condicional
    if (p>=6.2){

       // Imprimir los resultados
        alert("Estudiante "+name+" asignado a la materia "+materia+" su promedio es "+p+" usted APROBO"); 
    }
    else{

        // Imprimir los resultados
    alert("Estudiante "+name+" asignado a la materia "+materia+" su promedio es "+p+" usted REBROBO");
    }
    
}

// 9. Determinar si el número ingresado por el usuario es par o impar 

function paroimpar() {
    // Declaración de varibales e inicialiazación
    let a = parseInt(prompt("Ingrese el número: "));

    if (a%2===0){
        alert("El número es par "+a);
    }
    else{
        alert("El número es impar "+a);
    }
}

// 10. Un individuo desea invertir su capital en un banco y requiere  saber cuanto dinero ganara después de N número de años teniendo en cuenta que el interes mensual del 0.7%
function inversiones() {
    // Declaración de variables e inicialización
    let total;
    let dinero = parseInt(prompt("Ingrese el capital que desea invertir: "));
    let dinerof = dinero.toLocaleString("es-ES"); 
    let ti = (0.7 * 12) /100;  // tasa anual a partir de la tasa mensual del 0.7%
    let pc ;
    let años = parseInt(prompt("Ingrese el número de años: "));

    // Procedimiento
    pc = (dinero * ti )*años;
    total = dinero + pc;
    let totalf = total.toLocaleString("es-ES"); 

    // Imprime los resultados
    alert("El dinero estimado que ganará será $" + totalf + 
          " de acuerdo al capital que desea invertir: $" + dinerof + 
          ", el número de años: " + años + 
          ", y una tasa de interés mensual del 0.7%.");
}

// 11. Realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los numeros entre ellos

function rango() {
    // Declaración de variables e inicialización
    let n = parseInt(prompt("Ingrese el valor inicial del rango: "));
    let fn = parseInt(prompt("Ingrese el valor final del rango: "));

    // Validar los numeros esten utiles para el proceso
    if (isNaN(n) || isNaN(fn)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    if (n >= fn) {
        alert("El valor inicial debe ser menor que el valor final.");
        return;
    }

    // Imprimir los números del bucle
    let r = "Números entre " + n + " y " + fn + ": ";
    for (let i = n + 1; i < fn; i++) {
        r += i + " ";
    }

    // Imprimir
    alert(r);
}

// 12. Realizar un Algoritmo que verifique que el número ingresado por el usuario sea primo

function primo() {
    // Declaración de variables e inicialización
    let n = parseInt(prompt("Ingrese un número para verificar si es primo: "));

    // Validación del numero que entra sea mayor a 1
    if (isNaN(n) || n <= 1) {
        alert("Por favor, ingrese un número entero mayor que 1.");
        return;
    }

    // Proceso para saber si el número primo
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }

    // Imprimir el resultado
    if (esPrimo) {
        alert("El número " + n + " es primo.");
    } else {
        alert("El número " + n + " no es primo.");
    }
}

// 13. Realizar un Algoritmo que convierta el peso colombiano en dolares y euros.

function moneda() {
    // Declaración de variables e inicialización
    let a = parseFloat(prompt("Ingrese el valor a convertir: "));
    let d = 4.467;  // Tasa de conversión a dólares
    let e = 4.832;  // Tasa de conversión a euros
    let dl;
    let er;

    // Procedimiento de conversión
    dl = a / d;
    er = a / e;

    // Redondear a dos decimales
    dl = dl.toFixed(2);
    er = er.toFixed(2);

    // Imprimir los resultados
    alert("El valor en dólares es: $ " + dl);
    alert("El valor en euros es: € " + er);

}
