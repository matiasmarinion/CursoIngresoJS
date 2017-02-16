function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño){

    case "Febrero":
    alert(mesDelAño + "tiene 28 dias")
    break

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "noviembre":
   

    alert(mesDelAño + " tiene 30 dias")
    break
   
    default:
    alert(mesDelAño + " tiene 31 dias")
}


	



}//FIN DE LA FUNCIÓN