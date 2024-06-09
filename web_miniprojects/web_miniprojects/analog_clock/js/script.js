// clock js file
function clock(){
var d= new Date();
//alert(d);
var hours= d.getHours();
var minutes= d.getMinutes();
var seconds= d.getSeconds();

var h_angle = (hours*30)+(minutes/2);
var m_angle = (minutes*6)+(seconds/10);
var s_angle = (seconds*6);

document.querySelector("#hr").style.transform="rotate("+h_angle+"deg)";
document.querySelector("#min").style.transform="rotate("+m_angle+"deg)";
document.querySelector("#sec").style.transform="rotate("+s_angle+"deg)";
//alert();

}
setInterval(() =>{
clock();
},1000);