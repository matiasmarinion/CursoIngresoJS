/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var larTerreno;
	var anchoTerreno;
	var resultado;
	larTerreno=document.getElementById("Largo").value;
	larTerreno=parseInt(larTerreno);
	anchoTerreno=document.getElementById("Ancho").value;
	anchoTerreno=parseInt(anchoTerreno);
	
	resultado=(larTerreno+anchoTerreno)*2
	alert("el rectangulo de alambre es:"+resultado)
}
function Circulo () 
{
	var resultado;
    var circulo;
   
   circulo=document.getElementById("Radio").value;
  circulo=parseInt(circulo);
 
   resultado= Math.floor(Math.PI * (circulo*2))*3;
 
   alert("Se necesitan "+resultado +" metros de alambre")
}
function Materiales () 
{
	
var resultado;
  var resultado2;
  var largo;
  var ancho;

        largo=document.getElementById("Largo").value;
      largo=parseInt(largo);
  
        ancho=document.getElementById("Ancho").value;
        ancho=parseInt(ancho);

         resultado= largo*ancho*2;
        resultado2= largo*ancho*3;
        alert("Se necesitan " +resultado + " bolsas de cemento y "+resultado2 +" bolsas de cal")
 


}