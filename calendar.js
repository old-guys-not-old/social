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
  var currSunday=24
  var times=["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm", "12 am"]
  k=0
  for (var i = 9; i < 25; i++){
    for (var j = -1; j < 7; j++){
      if(j==-1){
        var newDiv=document.createElement("div");
        var newContent = document.createTextNode(times[k]);
        newDiv.appendChild(newContent);
        var currentDiv=document.getElementById("grid-container")
        document.getElementById("grid-container").appendChild(newDiv);
        k++
        }
      else{
        var g=document.createElement("div");
        g.id=String(i) +"-" + String(j+currSunday);
        g.className="grid-item";
        //g.onclick=changeForm(String(i),String(j+currSunday))
        g.addEventListener('click', function(){
          str=j+currSunday
          changeForm(i,str);
        });
        g.onclick=toggleForm
        document.getElementById("grid-container").appendChild(g);
        }
      }
    }
}


function changeForm(time,day){
  //console.log("2019-02-" + day)
  //console.log(String(parseInt(time)%24+1)+":00")
  d="2019-02-" + day
  var da= getQueryVariable("day");
  console.log(d)
  console.log(da)
  console.log(time+":00")
  document.getElementById("day-selection").value=d;
  document.getElementById("start-time").defaultValue=String(time)+":00"
  document.getElementById("end-time").defaultValue=String(time%24+1)+":00"
}

function submitForm(){
  if(getQueryVariable("title")){
    var eventTitle = getQueryVariable("title");
    if (eventTitle.length>3){
      eventTitle=eventTitle[0]+eventTitle[1]+".."
    }
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
    mid=Math.floor(diff/2);
    string=starthour+"-"+day;
    var i;
  for (i = 0; i <= diff; i++) {
    string=(parseInt(starthour)+i)+"-"+day;
    document.getElementById(string).style.backgroundColor='#585858';
    document.getElementById(string).style.color='white';
    document.getElementById(string).onclick=eventDetails;
    if(i==mid){
    document.getElementById(string).innerHTML=eventTitle;
  }
}
}
}



function eventDetails(){
  var str=getQueryVariable("title")
  var notes = getQueryVariable("notes");
  var start = getQueryVariable("start");
  var end = getQueryVariable("end");
  var invite = getQueryVariable("invite");
  var day = getQueryVariable("day");
  document.getElementById("event-title").value=str;
  document.getElementById("event-details").value=notes;
  document.getElementById("start-time").value=start;
  document.getElementById("end-time").value=end;
  document.getElementById("start-time").value=start;
  document.getElementById("guests-input").value=invite;
  document.getElementById("day-selection").value=day;
  toggleForm2()
}



function toggleForm(){
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
