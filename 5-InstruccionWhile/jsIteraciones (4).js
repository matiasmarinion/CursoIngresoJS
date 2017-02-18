function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero>=9 || numero<=0)
	{
		numero=prompt("reingrese el numero");

	}
	
	document.getElementById('numero').value=numero;


}//FIN DE LA FUNCIÓN