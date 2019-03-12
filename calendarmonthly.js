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
  document.getElementById("day-selection").value=d;
  document.getElementById("start-time").defaultValue=String(time)+":00"
  document.getElementById("end-time").defaultValue=String(time%24+1)+":00"
}

function submitForm(){
  var events=$.parseJSON(sessionStorage.getItem('events')).events
  for(var p=0; p<events.length;p++){
    var day = events[p].day;
    day=day[8]+day[9]
    document.getElementById(day).style.backgroundColor='#585858';
    document.getElementById(day).style.color='white';
    document.getElementById(day).setAttribute("day",day)
    //document.getElementById(string).onclick = function() { eventDetails(this);};
    }
}

function subFunction(){
var title=document.getElementById('event-title').value;
var notes = document.getElementById('event-details').value;
var start = document.getElementById('start-time').value;
var end = document.getElementById('end-time').value;
var invite = document.getElementById('guests-input').value;
var day = document.getElementById('day-selection').value;
if (!sessionStorage.getItem('events')){
  var events={"events":[{"title":title, "notes":notes,"start":start,"end":end,"invite":invite,"day":day}]
              }
  events=JSON.stringify(events)
  sessionStorage.setItem('events', events);
  console.log(sessionStorage.getItem('events'))
    }
else{
      z=sessionStorage.getItem('events');
      temp=$.parseJSON(z);
      var b={"title":title, "notes":notes,"start":start,"end":end,"invite":invite,"day":day};
      temp.events.push(b);
      var arr=temp.events
      var uniquearray=[]
      $.each(arr, function(i, el){
    if($.inArray(el, uniquearray) === -1) uniquearray.push(el);
        });
        console.log(uniquearray)
      events=JSON.stringify(temp);
      sessionStorage.setItem('events', events);
    }
  //console.log($.parseJSON(sessionStorage.getItem('events')).events[0].title)

  toggleForm()
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

function huf(){
  console.log("HEYY")
  return false;
}
