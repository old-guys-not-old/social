
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

function populate()
{
  var events=$.parseJSON(sessionStorage.getItem('events')).events
  if (events){
    for(var p=0; p<events.length;p++){
      var title =events[p].title;
      var notes = events[p].notes;
      var start = events[p].start;
      var end = events[p].end;
      var invite = events[p].invite;
      var day = events[p].day;
      day=day[8]+day[9]
      starthour=start[0]+start[1];
      endhour=end[0]+end[1];
      console.log(title,notes,start,end,invite,day,starthour,endhour)
      var g=document.createElement("div");
      g.className='preview-chat-box';
      var z=document.createElement("span")
      z.className="glyphicon glyphicon-pencil";
      var y=document.createElement("div");
      y.id="edit-button"
      y.className="edit-button"
      var x = document.createElement("p")
      x.id="preview-details"
      x.className="event-name"
      x.innerHTML=title+"<br>"
      var loc = document.createElement("p")
      loc.id="event-descriptions1"
      loc.className="event-descriptions1"
      loc.innerHTML="at "+notes+"<br>"
      var time = document.createElement("p")
      time.id="event-descriptions1"
      time.className="event-descriptions1"
      time.innerHTML="on "+"3/"+day+"/2019"+" at "+start+"<br>"
      var ppl = document.createElement("p")
      ppl.id="event-descriptions2"
      ppl.className="event-descriptions2"
      if(invite.length!=0){
        ppl.innerHTML="with "+invite+"<br>"
      }

      var w=document.createElement("span")
      w.className="glyphicon glyphicon-comment";
      var t=document.createElement("div");
      t.id="chat-button"
      t.className="chat-button"
      t.appendChild(w)
      y.appendChild(z)

      g.appendChild(x)
      g.appendChild(y)
      g.appendChild(t)
      g.appendChild(loc)
      g.appendChild(time)
      g.appendChild(ppl)

      document.getElementById("recent-activities").appendChild(g)
    }
  }
}

//<div class='preview-chat-box'>
//    <p id="preview-details" class="event-name"> 6x6 Futsal game</p>
//    <div id="edit-button" class="edit-button">
//      <span class="glyphicon glyphicon-pencil">
//    </div>
//    <div id="chat-button" class='chat-button'>
//      <span id="edit-button"class="glyphicon glyphicon-comment">
//    </div>
//</div>

function submitfunction(){
  document.getElementById("myForm").style.display="block";
  var message = document.getElementById("message-input").value;
  document.getElementById("message-input").value="";
  document.getElementById("chat-box").innerHTML=document.getElementById("chat-box").innerHTML+'<h5 id="message">Abizar: '+ message+ '</h5>';
}
