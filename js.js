

//***********JS de las letras NEon*********/////

const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

////*****Contador de visias*******************////

yu=function(id){
	return document.getElementById(id);
}
if(localStorage){
	 if(localStorage['visitas']==undefined){
		 localStorage['visitas']=0;/* Codigo por http://adan-2994.es.tl/Contador_de_visitas_javascript.htm */
	}
	var n=parseInt(localStorage['visitas']);
	localStorage['visitas']=1+n;
	var num=localStorage['visitas'];

	var mens="Hasta ahora has visitado mi pagina " + num + " Veces !";

	yu('cuentavisitas').innerHTML=mens;
}

//Funciones para el cambio de imagen 

 function cambioGato(){
 	document.getElementById('gatines').src="http://lorempixel.com/output/cats-q-c-300-300-4.jpg";
 }

 function vueltaGato(){
 	document.getElementById('gatines').src="http://lorempixel.com/output/cats-q-c-300-300-2.jpg";
 }




//Desaparece el video y las letras y aparece el contenido de pag



$(document).ready(function() {
    setTimeout(function() {
        $(".videoInicio").fadeOut(1500);
          $(".letrasInicio").fadeOut(1500);
    },10000);
         
    setTimeout(function() {
        $(".pag").fadeIn(1500);
    },10000);
 
   
});


/***********Funcion que abra una pagina si coinciden usu y pass********************/




function login(){
  var usu=document.getElementById("user").value;
var pass=document.getElementById("inputPass").value;
//alert(usu);
//alert(pass);
if(usu=='loki' && pass=='loki'){
 window.open("dentro.html");
}
else{ alert("Error!!!!!!!");} 

};

///////////////////////////////////////////////////////////////////////

 
 function holi(){
            var nombrecito=prompt("¿Como te llamas?");
            document.getElementById('tu').innerHTML=nombrecito+"!";

        }

  function cambioColor(colorcico){
  document.getElementById('cambioFondo').style.backgroundColor=colorcico;
  
   }


   ////////////********Reloj****************///////////////

   function mueveReloj(){ 
    momentoActual = new Date() 
    hora = momentoActual.getHours() 
    minuto = momentoActual.getMinutes() 
    segundo = momentoActual.getSeconds() 

    str_segundo = new String (segundo) 
    if (str_segundo.length == 1) 
        segundo = "0" + segundo 

    str_minuto = new String (minuto) 
    if (str_minuto.length == 1) 
        minuto = "0" + minuto 

    str_hora = new String (hora) 
    if (str_hora.length == 1) 
        hora = "0" + hora 

    horica = hora + " : " + minuto + " : " + segundo 

    document.form_reloj.reloj.value = horica

    setTimeout("mueveReloj()",1000) 
} 



////////////****Cambiar P de color************/////

function cambiosColores(){
  var colores = new Array('red', 'blue','yellow', 'orange', 'purple');
  var cambioColor_Id = false;
  var count = 0;
  var todasP = document.getElementsByTagName('p');
  var nTodasP;
  if (cambioColor_Id==false){
    cambioColor_Id = setInterval(function(){
      nTodasP = Math.floor(Math.random()*((todasP.length-1)-0+1))+0;
      todasP[nTodasP].style.color=colores[count];
      count++;
      if(count>colores.length-1){
        count=0;
      }
    },1000);
  }
}  
//***parar el interval****///
// function parar_cambiosColores(){
//   clearInterval(cambioColor_Id);
//   cambioColor_Id = 0;
// }


////////*******Botonenviar******************/////////


function acepta(){
  var check=document.getElementById('botonAcepta');
  var boton=document.getElementById('botoncillo');
  if(check.checked==true){
    boton.style.display = "block";
  }

}
