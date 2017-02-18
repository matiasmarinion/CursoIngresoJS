function Mostrar()
{

	var nadie;
	var nombre10;
	var edad10;
	var sexo10;




	var contador=0;
	// declarar variables
	var edad;
	var maximo;
	var minimo;
	var nombre;
	var nombreDelMayor;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var desaprobadosHombres;
	var desaprobadosMujeres;
	var aprobado=0;
	var promedioDeNotas;
	var acumuladorDeNotas;
	var respuesta='si';

	while(respuesta!='no')
	{
	nuemro=prompt("ingrese edad");	
	edad=parseInt(edad);
	contador++;


	while(edad<0 || edad>100)
	{
		nuemro=prompt("ingrese edad");	
		edad=parseInt(edad);
	}

	sexo=prompt("ingrese su sexo");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("ERROR ingrese su sexo");
	}


	
	nombre=prompt("por favor ingrese nombre");
	if(contador==1)
	{
		maximo=edad;
		minimo=edad;
		nombre=nombreDelMayor;
	}
	else
	{
		if(maximo<edad)
		{
			maximo=edad;
			nombre=nombreDelMayor
		}
		if(minimo>edad)
		{
			minimo=edad;
		}
		//cantidad de personas aprobadas se aproba con 4
	nota=prompt("ingrese su nota");
	nota=parseInt(nota);
	

	if(nota==10 && yaTengoEl10 == "no")
	{
		nombre10=nombre;
		edad10=edad;
		sexo10=sexo;
		yaTengoEl10="si o alguien"
	}

	while(nota<0 && nota>11)
	{
		nota=prompt("ingrese su nota");
		nota=parseInt(nota);
	}

	if(contador==1)	
	{
		notaMinima=nota;
		sexoMinimo=sexo;
	}
	else
	{
		if(notaMinima<notaMinima)
		{
			notaMinima=nota;
			sexoMinimo=sexo;
		}
	}


	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
	




	respuesta=prompt("para salir teclee no")
	}


//necesito saber cuantas personas desaprobaron
// necesito saber el promedio de notas
//la edad promedio de las mujeres
// (ej 6 7 8; y el del tp par y impar) 
// compilado de todo:la cantidad de mujeres que aprobaron con nota par y son menores de edad
}//FIN DE LA FUNCIÓN