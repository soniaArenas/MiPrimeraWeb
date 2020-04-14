//Alert personalizado
  
 function CustomAlert(){
  this.render = function(dialog){
    var winW = window.innerWidth;
      var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "Bienvenid@!!!!";
      document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<label for="usuario"  class=" control-label" style="float:left;">Usuario</label> <input type="text" name="usuario" class="form-control" id="usu" placeholder="Usuario"> <label for="password" class="col-sm-2 control-label" style="float:left;">Pass</label> <input type="password" name="pass" id="contra" class="form-control"   placeholder="Contraseña">  <button id="botoncito" onclick="otroLogueo();">Iniciar Sesión</button>';
  }
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}
var Alert = new CustomAlert();

var Confirm = new CustomConfirm();
   

function otroLogueo(){
  var usu=document.getElementById("usu").value;
var pass=document.getElementById("contra").value;
//alert(usu);
//alert(pass);
if(usu=='loki' && pass=='loki'){
 window.open("dentro.html");
}
else{ alert("Error!!!!!!!");} 

};


/////////////
function login(){
  var usu=document.getElementById("user").value;
var pass=document.getElementById("inputPass").value;
//alert(usu);
//alert(pass);
if(usu=='loki' && pass=='loki'){
 window.open("https://sonyloki.jsalmoralp.es/bienvenid-a-tu-pagina/");
}
else{ alert("Error!!!!!!!");} 

};