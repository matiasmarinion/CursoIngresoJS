/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var resultado;
	resultado=2%10;
	alert(resultado);
	resultado=10%2;
	alert(resultado);  ejemplo */ 
	
	var dividendo;
	var divisor;
	var resultado;
	var numeroDividendo;
	var numeroDivisor;
	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);
	resultado=numeroDividendo%numeroDivisor;
	alert("el resto es "+ resultado);

	












}
