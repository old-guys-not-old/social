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


function populate(){
  var da= getQueryVariable("chat");
  if(da){
  document.getElementById("chat-box").innerHTML='<h5 id="message">'+'Ryan:'+da+'</h5>';
}
}
