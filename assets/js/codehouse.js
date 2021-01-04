 // se toma el nombre
 let nombre = prompt('Escribe tu nombre para saber cuantas letras tiene');
 // se toma los datos originales del dom
 const textoEncabezado = document.querySelector('.text-center h1').textContent;
 const textoParrafo = document.querySelector('.text-center p').textContent;
 // conteo de letras de la variable nombre
 let contador = nombre.length;
 // se escribe en dom los datos tomados
 document.querySelector('.text-center h1').textContent = `Hola ${nombre}`;
 document.querySelector('.text-center p').textContent = `El nombre ${nombre} tiene ${contador} letras`;
 // se escribe por consola los datos tomados
 console.log(`Hola ${nombre}`);
 console.log(`El nombre ${nombre} tiene ${contador} letras`);