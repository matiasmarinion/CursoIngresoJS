function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;


	while(contador<5)
	{
		contador++;
		numero=prompt("numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador;

	}
	




	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN