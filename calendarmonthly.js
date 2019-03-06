// Create your global variables below:

// src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
// }
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;



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

function populateCal(){
  k=0
  for (var i = 0; i < 36; i++){
        var g=document.createElement("div");
        g.id=String(i-4);
        if(g.id.length<=1){
          g.id="0"+g.id;
        }
        g.className="grid-item";
        //g.onclick=changeForm(String(i),String(j+currSunday))
        g.onclick=toggleForm
        g.style.height="50px"
        g.style.borer="solid 5px"
        if (i>4 && i<36){
          g.style.backgroundColor="#f2f2f2"
          g.innerHTML=String(i-4)
        }
        document.getElementById("grid-container").appendChild(g);
    }
}


function changeForm(time,day){
  //console.log("2019-02-" + day)
  //console.log(String(parseInt(time)%24+1)+":00")
  d="2019-03-" + day
  var da= getQueryVariable("day");
  //console.log(d)
  //console.log(da)
  //console.log(time+":00")
  document.getElementById("day-selection").value=d;
  document.getElementById("start-time").defaultValue=String(time)+":00"
  document.getElementById("end-time").defaultValue=String(time%24+1)+":00"
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
    document.getElementById(day).style.backgroundColor='#585858';
    document.getElementById(day).style.color="white";
    document.getElementById(day).onclick=eventDetails;
}
}



function eventDetails(){
  var str=getQueryVariable("title")
  var notes = getQueryVariable("notes");
  var start = getQueryVariable("start");
  var end = getQueryVariable("end");
  var invite = getQueryVariable("invite");
  var day = getQueryVariable("day");
  var notes = notes.split("+").join(" ");
  var invite = invite.split("+").join(" ")
  var title = str.split("+").join(" ")
  start=(String(parseInt(start)%24)+":00")
  end=(String(parseInt(end)%24)+":00")
  document.getElementById("event-title").value=title;
  document.getElementById("event-details").value=notes;
  document.getElementById("start-time").value=start;
  document.getElementById("end-time").value=end;
  document.getElementById("start-time").value=start;
  document.getElementById("guests-input").value=invite;
  document.getElementById("day-selection").value=day;
  document.getElementById("create-event").innerHTML="Edit Event"
  toggleForm2()
}



function toggleForm(){
  document.getElementById("create-event").innerHTML="Create Event"
  document.getElementById("event-title").value="";
  document.getElementById("event-details").value="";
  document.getElementById("start-time").value="";
  document.getElementById("end-time").value="";
  document.getElementById("start-time").value="";
  document.getElementById("guests-input").value="";
  document.getElementById("day-selection").value="";
if (document.getElementById("myForm").style.display=="block"){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-screen").style.opacity=0;
  document.getElementById("form-screen").style.display="none";

}
  else {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.opacity=.5;
    document.getElementById("form-screen").style.display="block";


  }
}




function toggleForm2(){
if (document.getElementById("myForm").style.display=="block"){
  document.getElementById("myForm").style.display = "none";
  document.getElementById("form-screen").style.opacity=0;
  document.getElementById("form-screen").style.display="none";
}
  else {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.backgroundColor="grey";
    document.getElementById("form-screen").style.opacity=.5;
    document.getElementById("form-screen").style.display="block";


  }
}
