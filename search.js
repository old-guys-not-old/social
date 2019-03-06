/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function nameList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('name-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("name-list");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
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


function populate(){
names=["Agnes", "Adele", "Christina","Billy","Calvin","Bob","Cindy","Garrett","Grant","Abizar","Donnie T","Adrienne Brosnan",
"Sharilyn Tripodi","Cody Percell","Ashlee Bodkin","Zoe Latshaw","Chadwick Gregerson","Sherie Nolan","Delmar Prunty",
"Sanora Fontana","Zada Suhr","Nancee Hudgins","Lashaun Ledet","Alene Topps","Florine Steppe","Gretta Eck","Effie Guffey",
"Delores Wingham","Roxann Reddell","Candance Mcclaskey","Mitzie Bedolla","Petronila Rosin","Josefa Omeara","Sherise Hallock",
"Karyl Albers","Alden Berthold","Hal Buescher","Margit Gratz","Ciera Mcevoy","Gaston Kincaid","Kasey Govan"]
var nam=[]
b=document.getElementById("name-input").value;
if(!b){
  document.getElementById("name-list").innerHTML="";
}
if(b){
  document.getElementById("name-list").innerHTML="";
    b=jsUcfirst(b)
    console.log("part1")
    for (var i=0; i<names.length;i++){
      console.log(names[i])
        nam[i]=names[i].substring(0,b.length)
        nam[i]=jsUcfirst(nam[i])
        console.log(nam[i])
        if(nam[i]==b){
          document.getElementById("name-list").innerHTML=document.getElementById("name-list").innerHTML+"<li><a href='#'>"+names[i]+"</a></li>";
        }
    }
}
}
