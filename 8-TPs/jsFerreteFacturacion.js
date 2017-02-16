/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var preUno;
	var preDos;
	var preTres;
	var resultado;
	preUno=document.getElementById("PrecioUno").value;
	preUno=parseInt(preUno);
	preDos=document.getElementById("PrecioDos").value;
	preDos=parseInt(preDos);
	preTres=document.getElementById("PrecioTres").value;
	preTres=parseInt(preTres);
	resultado=preUno+preDos+preTres;
	alert("la suma es:"+resultado)

}
function Promedio () 
{
	var preUno;
	var preDos;
	var preTres;
	var resultado;
	preUno=document.getElementById("PrecioUno").value;
	preUno=parseInt(preUno);
	preDos=document.getElementById("PrecioDos").value;
	preDos=parseInt(preDos);
	preTres=document.getElementById("PrecioTres").value;
	preTres=parseInt(preTres);
	resultado=(preUno+preDos+preTres)/3;
	alert("el promedio es:"+resultado)
}
function PrecioFinal () 
{
	var preUno;
	var preDos;
	var preTres;
	var resultado;
	preUno=document.getElementById("PrecioUno").value;
	preUno=parseInt(preUno);
	preDos=document.getElementById("PrecioDos").value;
	preDos=parseInt(preDos);
	preTres=document.getElementById("PrecioTres").value;
	preTres=parseInt(preTres);
	resultado=(preUno+preDos+preTres)*1.21;
	alert("el precio final es:"+resultado)

}