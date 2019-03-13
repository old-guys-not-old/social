function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('nameInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("contactUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent ;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
names=["Akshay Bhardwaj","Amy Yang","Andrew Kim","Can Divitoglu","Daniel Bang","Daniel Chou","David Ding",
"Garrett Matsuda","Izuho Suzuki","Lenin Estrada","Michael Waldman","Natalie Ghidali","Nathan Timmerman",
"Nicole Hessler","Rochelle Compendio","Ryan Rawitscher","Samanvitha Sundar","Victor Aung","Yue Wang"]
var nam=[]
  var nam=[]
  b=document.getElementById("nameInput").value;
  if(!b){
    document.getElementById("contactUL").innerHTML="";
  }
  if(b){
    document.getElementById("contactUL").innerHTML="";
      b=jsUcfirst(b)
      //for(var k=0;k<b.length;k++){
      //  if (b[k]=" "){
     //        var h =1;
    //      first=b.slice(0,k);
    //      last=jsUcfirst(b.slice(k+1));
    //      b=first+last;
    //    }
    //   }
      console.log(b)
      for (var i=0; i<names.length;i++){
          nam[i]=names[i].substring(0,b.length)
          nam[i]=jsUcfirst(nam[i])
          if(nam[i]==b){
            //str=\"names[i]\";
            var text = "\""+names[i]+"\"";
            console.log(text)
            document.getElementById("contactUL").innerHTML=document.getElementById("contactUL").innerHTML+"<li><a href='friendprofile.html' onClick='profileView("+ text + ")'>"+names[i]+"</a></li>";
          }
      }
  }

  function profileView(name){
    localStorage.setItem("name",name);
  }

  function loadprofile(n){
    document.getElementById("profile-name").innerHTML = n;
  }
