/**
 * Clase que contiene los metodos que dan funcionalidad a la interfaz
 *
 * @package CGR
 * @author Cristobal Alvarez
 * @copyright CGR
 * @link https://gitlab.com/GrullaAgency/cgr.git
 * @since 09-21-2018
 * @version 1.0
*/
var i_Index = (function($, window, document, undefined)
{
	'use strict';
	/**
	 * Constructor de la clase.
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Arreglo de variables de configuracion de clase.
	 *
	 * @return void
	*/
	function Index(data)
	{
    }

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.AOSinit = function(data)
	{
		AOS.init();
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.WOWinit = function(data)
	{
		new WOW().init();
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.nombreIni = function(data)
	{
		// new TypeIt('#nombre', {
		// 	strings: 'María Paula Silva',
		// 	speed: 80,
		// 	waitUntilVisible: true
		// }).go();	

		const instance = new TypeIt('#nombre', {
			strings: 'María Paula Silva',
			speed: 80,
			waitUntilVisible: true,
			afterComplete: (instance) => {
				setTimeout(() => {
					$("#nombre .ti-cursor").css('color','transparent');
				}, 1300);
			}
		}).go();	

		setTimeout(() => {
			new TypeIt('#versatil', {
				speed: 50
				// startDelay: 2500
			})
			.type('Another graphic designer')
			.pause(300)
			.options({speed: 50, deleteSpeed: 40})
			.delete(24)
			.pause(150)
			.type('An <em class="miclase">amazing</em>')
			.pause(750)
			.type(' graphic designer')
			.pause(750)
			.type('.')
			.go();
		}, 1900);

		new TypeIt('#trabajemos', {
			strings: 'Trabajemos Juntos',
			speed: 60,
			waitUntilVisible: true
		}).go();


		//   new TypeIt('#versatil', {
		// 	strings: '{Diseñadora Gráfica}',
		// 	speed: 50,
		// 	waitUntilVisible: true,
		// 	startDelay: 1900
		//   }).go();
	}	
	//
		 /*new TypeIt('#cuentame', {
			speed: 40,
			startDelay: 2200,
			waitUntilVisible: true,
			})
			.type('Tienes algún proyecto?')
		  	.pause(750)
		  	.type(' Cuéntame qué tienes en mente.')
			.go();	

		new TypeIt('#correo', {
			strings: 'MARIAPAULASILVA2812@GMAIL.COM',
			speed: 40,
			startDelay: 2200,
			waitUntilVisible: true
		}).go();

		new TypeIt('#celular', {
			strings: '+56 9 7460 7196',
			speed: 40,
			startDelay: 2200,
			waitUntilVisible: true
		}).go();
		*/
		/**
		 
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.eventoClickEnviarConsultas = function(data)
	{
		var _this = this;
		$("#btnEnviarConsulta").on('click', function(){
			_this.enviarConsultas();
		})
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.enviarConsultas = function()
	{
		var nombre = $("#txtNombre").val();
		var correo = $("#txtCorreo").val();
		var telefono = $("#txtTelefono").val();
		var mensaje = $("#txtMensaje").val();
		if(nombre != "" && correo != "" && telefono != "" && mensaje != "")
		{
			var x = document.getElementById("audioSuccess"); 
			x.play(); 
			swal("¡Gracias!", "Te responderé pronto, ¡Que tengas un gran día!", "success");
			$("#txtNombre").val('');
			$("#txtCorreo").val('');
			$("#txtTelefono").val('');
			$("#txtMensaje").val('');
		}
		else
		{
			var x = document.getElementById("audioFail"); 
			x.play(); 
			swal ( "Alto ahí vaquero." ,  "Recuerda ingresar todos tus datos." ,  "error" );
		}
	}

	return(Index);
})(jQuery, window, document);

var index;
var hilosNavegacion;

jQuery(function(){

///////////////////////////////////////////////////////////

	var index = new i_Index({instancia:'index'});
	// Pasar la intancia de la clase a la raiz del navegador para que sea visible desde el DOM, y asi poder utilizarla desde cualquier parte, por ejemplo desde un <a href="nomClase.nomMetodo()"></a>
	window.index = index;
	// Inscripcion de eventos de interfaz, aqui van las asignaciones de los eventos a componente como el click, change, carga de data via ajax, etc. todo esto previa creacion de un metodo que implemente dicho jQuery
	index.eventoClickEnviarConsultas();
	index.AOSinit();
	index.nombreIni();
	// index.WOWinit();
});