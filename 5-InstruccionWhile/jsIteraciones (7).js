function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	while(respuesta=="si")
	{
		numero=prompt("numero");
		numero=parseInt(numero);
		
		respuesta=prompt("desea seguir")
		acumulador=acumulador+numero




	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN