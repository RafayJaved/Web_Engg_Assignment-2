var Calendar = function(o) {
  this.divId = o.ParentID;
  this.DaysOfWeek = o.DaysOfWeek;
  this.Months = o.Months;

  var d = new Date();
		this.CurrentMonth = d.getMonth();
		this.CurrentYear = d.getFullYear();

};

Calendar.prototype.nextMonth = function() {

  if ( this.CurrentMonth == 11 ) {

    this.CurrentMonth = 0;
	this.CurrentYear = this.CurrentYear + 1;

  } 
  else {

    this.CurrentMonth = this.CurrentMonth + 1;

  }

  this.showCurrent();
};

Calendar.prototype.previousMonth = function() {

  if ( this.CurrentMonth == 0 ) {

    this.CurrentMonth = 11;
	this.CurrentYear = this.CurrentYear - 1;

  } 
  
  else {

    this.CurrentMonth = this.CurrentMonth - 1;

  }
	this.showCurrent();
};
            
Calendar.prototype.showCurrent = function() {
  this.Calendar(this.CurrentYear, this.CurrentMonth);
};

Calendar.prototype.Calendar = function(y,m) {
  
  typeof(y) == 'number' ? this.CurrentYear = y : null;
  typeof(y) == 'number' ? this.CurrentMonth = m : null;

  var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();

  var lastDateOfCurrentMonth = new Date(y, m+1, 0).getDate();

  var lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  var monthandyearhtml = '<span id="monthandyearspan" style="font-size:20;">' + this.Months[m] + ' - ' + y + '</span>';

  var html = '<table id="tableid">';

  html += '<tr>';

  for(var i=0; i < 7;i++) {
        html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
  }

  html += '</tr>';

  var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;

  var cellvalue;

  for (var d, i=0, z0=0; z0<6; z0++) {
    html += '<tr>';


    for (var z0a = 0; z0a < 7; z0a++) {
     
      d = i + dm - firstDayOfCurrentMonth;

      if (d < 1){
        
        cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;
        html += '<td id="prevmonthdates">' + 
              '<span id="cellvaluespan">' + (cellvalue) + '</span><br/>' + 
            '</td>';

      } else if ( d > lastDateOfCurrentMonth){
        
        html += '<td id="nextmonthdates">' + (p++) + '</td>';

      } else {
        html += '<td id="currentmonthdates">' + (d) + '</td>';
        
        p = 1;

      }
      
      if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
        
        z0 = 10; 
      }


      i++;

    }

    html += '</tr>';
  }
  html += '</table>';

  document.getElementById("monthandyear").innerHTML = monthandyearhtml;

  document.getElementById(this.divId).innerHTML = html;
};

window.onload = function() {
  
  var c = new Calendar({
    ParentID:"divcalendartable",

    DaysOfWeek:[
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT',
    'SUN'
    ],

    Months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  });

  c.showCurrent();
  
  document.getElementById("btnPrev").onclick = function(){
    c.previousMonth();
  };

  document.getElementById("btnNext").onclick = function(){
    c.nextMonth();
  };

                          
}



function div_grow3(){

document.getElementById("calendar").style.width= "94%";
document.getElementById("calendar").style.height = "100%";
document.getElementById("calendar").style.bottom= "0%";
document.getElementById("calendar").style.left = "0%";
document.getElementById("calendar").style.zIndex = "20";
document.getElementById("calendar").style.borderRadius = "0px";
document.getElementById("tableid").style.fontSize = "50";
document.getElementById("calendarmonthcontrols").style.position = "absolute";
document.getElementById("calendarmonthcontrols").style.top = "40%";
document.getElementById("calendarmonthcontrols").style.left = "70%";
document.getElementById("calendarmonthcontrols").style.fontSize = "50";
document.getElementById("monthandyearspan").style.fontSize = "50";
document.getElementById("btn3").style.display = "block";





}

$("#btn3").click(function(){
    back_dash3();
});

function back_dash3(){
document.getElementById("calendar").style.width= "27%";
document.getElementById("calendar").style.height = "50%";
document.getElementById("calendar").style.bottom= "6%";
document.getElementById("calendar").style.left = "35%";
document.getElementById("calendar").style.zIndex = "1";
document.getElementById("calendar").style.borderRadius = "50px";
document.getElementById("tableid").style.fontSize = "18";
document.getElementById("calendarmonthcontrols").style.position = "relative";
document.getElementById("calendarmonthcontrols").style.top = "0%";
document.getElementById("calendarmonthcontrols").style.left = "0%";
document.getElementById("calendarmonthcontrols").style.fontSize = "18";
document.getElementById("monthandyearspan").style.fontSize = "18";
document.getElementById("btn3").style.display = "none";


}

