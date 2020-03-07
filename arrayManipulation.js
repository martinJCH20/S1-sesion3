let colors = ['blue','red','white','black'];

colors.splice(0,3); //elimina hasta dicha posición indicada
console.log('splice: ', colors);

let bagpack = ['pencil','cup','coke','cellphone'];

bagpack.splice(3);//elimina la posición indicada
console.log('splice: ', bagpack);

let schedule = ['I','have','a','class'];

schedule.splice(0,4,'We','are','going','to','class');//modifica desde una posición específica
console.log('splice: ', schedule);

schedule.splice(5,0,'Some','clients','today');//mantiene datos y agrega en cierta posición
console.log('splice: ', schedule);

let numbers = [1,2,3,4,5,6];

numbers.slice(0,1);//Copia arregla desde una posición
console.log('numbers: ', numbers);

let message = 'congratulations';

const abbrv = message.slice(0,7) + 's!'; //reemplaza valores al string desde una posición
console.log('abbrv: ', abbrv);

const abbbrv = `${message.slice(0,7)}s!`;//reemplaza valores al string desde una posición
console.log('abbrv: ', abbbrv);

let name = 'Martín';

name.split(); //muesta dato
console.log('name: ', name);

let saludo = 'Hola, buenas noches mi nombre es Martín, soy desarrollador de aplicaciones móviles';
//saludo.split(',',2);
console.log('saludo: ', saludo.split(',',2));//separa valores según el caracter indicado y la cantidad que se desea mostrar

let destinationDocument  = '98787899|1|7';
console.log('document: ', destinationDocument.split('|',1));

let firstname = 'Gerardo';
console.log('Firstname: ', firstname.split(''));

let fruits = ['orange','banana', false, 3, 'apple'];

console.log('fruits index banana: ', fruits.indexOf('banana')); //optiene la posición en la que se encuentra el valor
console.log('fruits index number 3: ', fruits.indexOf(3));
console.log('fruits index null: ', fruits.indexOf(null));
console.log('fruits: ', fruits.lastIndexOf('apple'));

const countryCode = ['+51', '+57','+1','+58','+47'];

const peru = countryCode.filter((code) => code ==='+51'); //filtra el valor indicado y lo asigna en la constante

console.log('Perú: ', peru);

const userNames = ['Martín', 'Pedro', 'Pamela', 'David'];

const display = userNames.map((item, index) => {
    console.log('Item: ', item);//valor de cada elemento
    console.log(index, item);//posición de cada elemento
    return item;
})

console.log('Item: ', display);

const numbers2 = [10,25,55,110];

const dollars = numbers2.map((number) => {
    console.log(`$${number}`);
    //`$${number}`;
})

let sum = 0;

for(let n of numbers2){//array de suma
    sum += n;
}

console.log('sum', sum);

const suma = numbers2.reduce((acumulator, value) =>
    acumulator + value,0);//Otro método de sumatoria

console.log('suma2', suma);

const suma3 = numbers2.reduce((acumulator, currentValue, currentIndex) => {
    console.log('acumulador', acumulator, 'currentValue',currentValue, 'currentIndex', currentIndex)
    acumulator + currentValue});

console.log('suma3', suma);

colors.forEach((item, index) => {
    console.log(index, item)
})

const numbers3 = [10,25,55,110,-1,-5];

let allPositive = numbers3.every((value) => { //evalua si todos son positivos
    return value>0;
})

console.log('allPisitive', allPositive);

let atLeastOnePose = numbers3.some((value) => {//si al menos es pisitvo
    return value >= 0;
})

console.log('atLeastOnePose', atLeastOnePose);

console.log(userNames.includes('Martín'));//si existe valor