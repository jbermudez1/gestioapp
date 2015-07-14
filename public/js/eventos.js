$(document).ready( function () {

// boton entrar
	$(".entrar").click( function( event ){
		event.preventDefault();
		login();
	})


}) 

function login (){
	$("#home").removeClass("offSet");
}