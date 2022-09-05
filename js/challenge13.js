const NUMBER_A= parseInt(prompt("Podes ingresar un número entero:"));
switch(NUMBER_A%2){
  case 0:
    alert(`El número=${NUMBER_A} es par.`);
    break;
  default:
    alert(`El número=${NUMBER_A} es impar.`);
}