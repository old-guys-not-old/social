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
  var currSunday=3
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
        g.id=String(i) +"-" + "0"+String(j+currSunday);
        g.className="grid-item";
        //g.onclick=changeForm(String(i),String(j+currSunday))
        g.addEventListener('click', function(){
          str=j+currSunday
          changeForm(this);
        });
        g.onclick=toggleForm
        g.style.backgroundColor="#f2f2f2"
        document.getElementById("grid-container").appendChild(g);
        }
      }
    }
}


function changeForm(element){
time=element.id.split("-")[0];
day=element.id.split("-")[1];
day="2019-03-"+day;
  // d="2019-03-" + day
  // var da= getQueryVariable("day");
 document.getElementById("day-selection").value=day;
 document.getElementById("start-time").defaultValue=String(time)+":00"
 document.getElementById("end-time").defaultValue=String(time%24+1)+":00"
}


function sub(){
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

function submitForm(){
  var events=$.parseJSON(sessionStorage.getItem('events')).events
  for(var p=0; p<events.length;p++){
    var eventTitle =events[p].title;
    if (eventTitle.length>5){
      eventTitle=eventTitle[0]+eventTitle[1]+eventTitle[2]+eventTitle[3]+eventTitle[4]+".."
    }
    var notes = events[p].notes;
    var start = events[p].start;
    var end = events[p].end;
    var invite = events[p].invite;
    var day = events[p].day;
    //console.log(eventTitle+" " +notes+" "+start+" "+end+" "+invite+ " "+ day);
      day=day[8]+day[9]
      starthour=start[0]+start[1];
      endhour=end[0]+end[1];
      diff=endhour-starthour
      mid=Math.floor(diff/2);
      string=starthour+"-"+day;
      var i;
      for (i = 0; i <= diff; i++) {
        string=(parseInt(starthour)+i)+"-"+day;
        if (document.getElementById(string)){
          document.getElementById(string).style.backgroundColor='#585858';
          document.getElementById(string).style.color='white';
          document.getElementById(string).setAttribute("title",eventTitle)
          document.getElementById(string).setAttribute("notes",notes)
          document.getElementById(string).setAttribute("start",start)
          document.getElementById(string).setAttribute("end",end)
          document.getElementById(string).setAttribute("invite",invite)
          document.getElementById(string).setAttribute("day",day)
          //console.log(this)
          document.getElementById(string).onclick = function() { eventDetails(this);};
          if(i==mid){
          document.getElementById(string).style.fontSize="7px";
          var eventTitle = eventTitle.split("+").join(" ")
          document.getElementById(string).innerHTML=eventTitle;
        }
      }
    }
}
}



function eventDetails(obj){
  console.log(obj)
  var str=obj.title
  var notes=obj.getAttribute('notes')
  var star=obj.getAttribute('start')
  var end=obj.getAttribute('end')
  var invite=obj.getAttribute('invite')
  var day=obj.getAttribute('day')
  day="2019-03-"+day;
  if(notes){
  var notes = notes.split("+").join(" ");
  }
if(invite){
  var invite = invite.split("+").join(" ")
}
  var title = str.split("+").join(" ")
  console.log(obj.getAttribute('day'))
  document.getElementById("event-title").value=title;
  document.getElementById("event-details").value=notes;
  document.getElementById("start-time").value=star;
  document.getElementById("end-time").value=end;
  document.getElementById("guests-input").value=invite;
  document.getElementById("day-selection").value=day;
  document.getElementById("create-event").innerHTML="Edit Event"
  toggleForm2()
}



function toggleForm(){
  document.getElementById("create-event").innerHTML="Create Event"
  document.getElementById("event-title").value="";
  document.getElementById("event-details").value="";
  document.getElementById("guests-input").value="";
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
function groupPic(){
  var checkBox = document.getElementById("chat-input");
  var upload = document.getElementById("group-pic");
  var text = document.getElementById("image-text")
  if (checkBox.checked == true){
    text.style.display = "block";
    upload.style.display = "block";
  } else {
    upload.style.display = "none";
  }
}
