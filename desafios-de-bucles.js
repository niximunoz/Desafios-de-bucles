/* Imprimir impares 1-20 Usando un bucle */
console.log("**Bucle For**");
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
console.log("######################");
console.log("**Bucle While**");
let a = 1;
while(a <= 20){
    if(a % 2 !== 0){
        console.log(a);
    }
    a++;
}
console.log("######################");


/* Imprimir todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0. */
console.log("**Bucle For**");
for(let i = 100; i > 0; i--){
    if(i % 3 === 0){
        console.log(i);
    }
}
console.log("######################");
console.log("**Bucle While**");
let b = 100;
while(b > 0){
    if(b % 3 === 0){
        console.log(b);
    }
    b--;
}
console.log("######################");

/* Imprimir los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5. */
console.log("**Bucle For**");
for(let i = 4; i >= -3.5; i -= 1.5){
    console.log(i);
}
console.log("######################");
console.log("**Bucle While**");
let c = 4;
while(c >= -3.5){
    console.log(c);
    c -= 1.5;
}
console.log("######################");

/* Sumar todos los valores del 1 al 100. */
console.log("**Bucle For**");
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log("Suma total:", sum);
console.log("######################");
console.log("**Bucle While**");
let sum2 = 0;
let d = 0;
while(d <= 100){
    sum2 += d;
    d++;
}
console.log("Suma total:", sum2);
console.log("######################");


/* Multiplique todos los valores del 1 al 12. */
console.log("**Bucle For**");
let producty = 1;
for(let i = 1; i <= 12; i++){
    producty = producty * i;
}
console.log("Multiplicación total:", producty);
console.log("######################");

console.log("**Bucle While**");
let producty2 = 1;
let e = 1;

while(e <= 12){
    producty2 *= e;
    e++;
}
console.log("Multiplicación total:", producty);
