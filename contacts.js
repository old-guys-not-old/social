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

function setProf(name){
  console.log(name.innerHTML)
  sessionStorage.setItem('friend',name.innerHTML)
  console.log(sessionStorage.getItem('friend'))
}


function addContacts(){
  var arr=sessionStorage.getItem('friends')
  if(!arr){
    var brr=['Ryan Rawitscher','Garrett Matsuda','Can Divitoglu']
    for(var i=0; i<brr.length;i++){
      var a = document.createElement('img')
      a.className='contact_controls'
      a.src='images/videocall.png'
      var b = document.createElement('img')
      b.className='contact_controls'
      b.src='images/call.png'
      var c = document.createElement('img')
      c.className='contact_controls'
      c.src='images/text.png'
      var d = document.createElement('p')
      d.innerHTML=brr[i]
      var e = document.createElement("li")
      d.appendChild(a)
      d.appendChild(b)
      d.appendChild(c)
      e.appendChild(d)

      document.getElementById('contactUL').appendChild(e)
  }
}
else{
  arr=arr.split(",")
  for(var i=0; i<arr.length;i++){
    var a = document.createElement('img')
    a.className='contact_controls'
    a.src='images/videocall.png'
    var b = document.createElement('img')
    b.className='contact_controls'
    b.src='images/call.png'
    var c = document.createElement('img')
    c.className='contact_controls'
    c.src='images/text.png'
    var d = document.createElement('p')
    var tt = document.createElement('a')
    var name=arr[i]
    tt.innerHTML=name
    tt.addEventListener('click', function(){
    setProf(this);
});

    tt.href='friendprofile.html'
    d.appendChild(tt)
    var f = document.createElement('a')
    f.href="tel:+16508883761"
    var g = document.createElement('a')
    g.href="tel:+16508883761"
    var e = document.createElement("li")
    f.appendChild(b)
    g.appendChild(a)
    e.appendChild(f)
    e.appendChild(g)
    //e.appendChild(b)
    e.appendChild(c)
    e.appendChild(d)

    document.getElementById('contactUL').appendChild(e)
}
  //<li><a href="#">Akshay Bhardwaj <img class="contact_controls" src="images/videocall.png"><img class="contact_controls" src="images/call.png"> <img class="contact_controls" src="images/text.png"></a></li>
}
}
