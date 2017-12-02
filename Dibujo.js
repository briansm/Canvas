var d=document.getElementById("candib");
var lienzo=d.getContext("2d");
var lineas=30;
var xf,yi;
var colorcito="#FAA";

for(l=0;l<lineas;l++){
  yi=10*l;
  xf=10*(l+1)
  dibujarline(colorcito,0,yi,xf,300);
}
dibujarline(colorcito,1,1,1,299);
dibujarline(colorcito,1,299,299,299);

function dibujarline(color,xini,xfin,yini,yfin){
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(xini,yini);
  lienzo.lineTo(xfin,yfin);
  lienzo.stroke();
  lienzo.closePath();
}
