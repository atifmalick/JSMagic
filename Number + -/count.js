var inc =document.getElementById("add");
var dec =document.getElementById("sub");
var dig = document.getElementById("dig");
var reset=document.getElementById("res");
var num=0;

inc.addEventListener('click', () =>{
     
    num++;
    dig.innerHTML=num;
})

dec.addEventListener('click', () => {
    num--;
    dig.innerHTML=num;
})

reset.addEventListener('click', () => {
    num=0
    dig.innerHTML=num;
})