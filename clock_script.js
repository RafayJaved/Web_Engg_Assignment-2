$(document).ready(function() {
         
              setInterval( function() {
              var sec = new Date().getSeconds();
              var secdeg = sec * 6;
              var secrotate = "rotateZ(" + secdeg + "deg)";
              
              $("#sec").css({"-moz-transform" : secrotate, "-webkit-transform" : secrotate});
			  }, 1000	 );
              
			  setInterval( function() {
              var min = new Date().getMinutes();
              var mindegree = min * 6;
              var minrotate = "rotateZ(" + mindegree + "deg)";
              
              $("#min").css({"-moz-transform" : minrotate, "-webkit-transform" : minrotate});
                  
              }, 1000 );
		 
		 
              setInterval( function() {
              var hrs = new Date().getHours();
              var min = new Date().getMinutes();
              var hrsdegree = hrs * 30 + (min / 2);
              var hrsrotate = "rotateZ(" + hrsdegree + "deg)";
              
              $("#hour").css({"-moz-transform" : hrsrotate, "-webkit-transform" : hrsrotate});                  
              }, 1000 );
        
			  setInterval( function() {
              var sec = new Date().getSeconds();
              var secdeg = sec * 6;
              var secrotate = "rotateZ(" + secdeg + "deg)";
              
              $("#sec1").css({"-moz-transform" : secrotate, "-webkit-transform" : secrotate});
			  }, 1000	 );
              
			  setInterval( function() {
              var min = new Date().getMinutes();
              var mindegree = min * 6;
              var minrotate = "rotateZ(" + mindegree + "deg)";
              
              $("#min1").css({"-moz-transform" : minrotate, "-webkit-transform" : minrotate});
                  
              }, 1000 );
		 
		 
              setInterval( function() {
              var hrs = new Date().getHours();
              var min = new Date().getMinutes();
              var hrsdegree = hrs * 30 + (min / 2);
              var hrsrotate = "rotateZ(" + hrsdegree + "deg)";
              
              $("#hour1").css({"-moz-transform" : hrsrotate, "-webkit-transform" : hrsrotate});                  
              }, 1000 );
           
         
        });

$("#clock").click(function(){
    div_grow();
});

$("#btn1").click(function(){
    back_dash1();
});



function div_grow(){

			
document.getElementById("big_clock").style.width= "100%";
document.getElementById("big_clock").style.height = "100%";
document.getElementById("clock1").style.display = "block";
document.getElementById("sec1").style.display = "block";
document.getElementById("min1").style.display = "block";
document.getElementById("hour1").style.display = "block";



}

function back_dash1(){
document.getElementById("big_clock").style.width= "0%";
document.getElementById("big_clock").style.height = "0%";
document.getElementById("clock1").style.display = "none";
document.getElementById("sec1").style.display = "none";
document.getElementById("min1").style.display = "none";
document.getElementById("hour1").style.display = "none";


}







