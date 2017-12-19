var texto=document.getElementById("txtlineas");
var btn=document.getElementById("boton");
btn.addEventListener("click",dibujoPorclick);
var d=document.getElementById("candib");
var ancho=d.width;
var lienzo=d.getContext("2d");

function dibujarline(color,xini,xfin,yini,yfin){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorclick(){
  var lineas=parseInt(texto.value);
  var xf,yi;
  var colorcito="#FAA";
  var espacio=ancho/lineas;
  for(l=0;l<lineas;l++){
    yi=espacio*l;
    xf=espacio*(l+1)
    dibujarline(colorcito,0,yi,xf,300);
  }
  dibujarline(colorcito,1,1,1,299);
  dibujarline(colorcito,1,299,299,299);

}
