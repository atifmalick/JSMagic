var qrcode=document.getElementById("qrcode");
var input=document.getElementById("input");
var genbtn=document.getElementById("generate");

genbtn.addEventListener("click",()=>{
    var url=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`;
    qrcode.src=url;


});