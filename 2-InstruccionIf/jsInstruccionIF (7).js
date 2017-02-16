function Mostrar()
{
//tomo la edad  

	var Edad;
    var Estadocivil;
   var Escivil;
  
      Edad=document.getElementById("edad").value;
  Estadocivil=document.getElementById("estadoCivil");
   Escivil=document.getElementById("estadoCivil").value;
  
 if (Estadocivil != "soltero" && Edad <= 17)
 {
     alert ("Usted es muy joven para NO ser soltero");
 }
 if (Escivil !="Soltero" && Edad <18)
 {
     alert ("Usted es muy joven para NO ser soltero")

}
}//FIN DE LA FUNCIÓN