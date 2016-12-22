
function calcular()
{
	var numero1 = document.getElementById("numero1").value;
	var numero2 = parseInt(document.getElementById("numero2").value);
	var salida = document.getElementById("salida");
	
	var suma=parseInt(numero1)+parseInt(numero2);

	if (numero1 == "" || numero2 == "" ) 
	{
		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Valores incorrectos</div>';
		//retorna 1
	}
	else if (numero1 == 10 || numero2 == 10 ) 
	{
		salida.innerHTML = "1";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Escribiste un 10</div>';
		//retorna 1
	}
	else if	(suma == 10)
	{
		salida.innerHTML = "1";
		//retorna 1
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Suma es 10</div>';
	}
	else 
	{
		salida.innerHTML = "0";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger"></div>';
		//retorna 0
	}


}
