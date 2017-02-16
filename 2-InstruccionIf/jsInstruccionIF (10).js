function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
 
 	nota = Math.floor(Math.random()*(10)) + 1;
 
 	if (nota >=10)
 	{
 		alert (nota+ "excelente")
 	}
 	else if (nota <4)
 	{
 		alert(nota+ " vamos la proxima se puede")
 	}
 	else
 	{
 		alert (nota+ " aprobo")
 	}
}//FIN DE LA FUNCIÓN