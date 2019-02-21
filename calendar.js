// Create your global variables below:

// src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
// }

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function submitForm(){
  if(getQueryVariable("title")){
    var eventTitle = getQueryVariable("title");
    var notes = getQueryVariable("notes");
    var start = getQueryVariable("start");
    var end = getQueryVariable("end");
    var invite = getQueryVariable("invite");
    var day = getQueryVariable("day");
    console.log(eventTitle+" " +notes+" "+start+" "+end+" "+invite+ " "+ day);
    day=day[8]+day[9]
    starthour=start[0]+start[1];
    endhour=end[0]+end[1];
    diff=endhour-starthour
    string=starthour+"-"+day;
    var i;
  for (i = 0; i <= diff; i++) {
    string=(parseInt(starthour)+i)+"-"+day;
    console.log(string)
    document.getElementById(string).style.backgroundColor='#585858';
    document.getElementById(string).style.color='white';
    document.getElementById(string).innerHTML=eventTitle;
  }
    document.getElementById(string).style.backgroundColor='#585858';
    document.getElementById(string).style.color='white';
    document.getElementById(string).innerHTML=eventTitle;
}
}



function toggleForm(){
if (document.getElementById("myForm").style.display=="block"){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-screen").style.opacity=0;
}
  else {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.opacity=.5;


  }
}
