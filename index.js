/* función con errores
function FormatString(sentence) {
  let result = [];

  sentence = sentence.toUpperCase();

  let i = 0;
  let j = 0;

  while (i < sentence.length) {
    if (
      (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
      (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(j) <= 57) ||
      sentence.charCodeAt(i) == 32 ||
      sentence.charCodeAt(i) == 45
    ) {
      sentence[j] = result[i];
      j += 1;
    }
    i += 1;
  }

  return result.join("");
}
*/

/*
    Errores encontrados: 
    1) El primer error que veo es el de la linea 5 -> sentence = sentence.toUpperCase(). En ningún momento el enunciado indica que hay que pasarlo a mayúscula al valor del parámetro.
    2) Faltan siguientes validaciones para aceptar minúsculas (línea 47), y guion bajo (línea 51) para guiones bajos.
    3) En la condición "(sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(j) <= 57)", estaría mal poner sentence.charCodeAt(j), porque debería tener la posición de i, para validar correctamente la cadena de texto en la posición en la que se está iterando.
    4) Este fragmento de código esta mal, "sentence[j] = result[i];", porque sentence es un valor que viene por parámentro para evaluar la cadena, por lo tanto no se deberia asignar un valor a ese resultado, ademmás de que hay que guardar el valor correcto que cumple con las condiciones segun la validacion en el array result.
    5) Agregué el condicional en la linea 43 por lo mencionado en el enunciado. Tome como valores permitidos los numeros entre el 0 y 127 del código ASCII. Por lo tanto si es mayor al 127 retorno un string "ERROR" y sale del bucle
*/

// función sin errores
function FormatString(sentence) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < sentence.length) {
    if (
      (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
      (sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122) ||
      (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(i) <= 57) ||
      sentence.charCodeAt(i) == 32 ||
      sentence.charCodeAt(i) == 45 ||
      sentence.charCodeAt(i) == 95
    ) {
      result[j] = sentence[i];
      j += 1;
    }
    i += 1;
  }

  if (result.length === 0) {
    return "ERROR";
  } else {
    return result.join("");
  }
}
console.log("FormatString con error:, ", FormatString("+++++}{}{+"));

console.log(
  "FormatString con formateo:",
  FormatString("HOLA!!!!,,,   51561 _-  ")
);
