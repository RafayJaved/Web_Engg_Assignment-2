function div_grow1(){

			
document.getElementById("big_weather").style.width= "100%";
document.getElementById("big_weather").style.height = "100%";
document.getElementById("wea1").style.display = "block";
document.getElementById("wea2").style.display = "block";

}


function back_dash2(){
document.getElementById("big_weather").style.width= "0%";
document.getElementById("big_weather").style.height = "0%";
document.getElementById("wea1").style.display = "none";
document.getElementById("wea2").style.display = "none";


}


$("#weather").click(function(){
    div_grow1();
});

$("#btn2").click(function(){
    back_dash2();
});