function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("?");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){
            return pair[1];
          }
   }
}


var arrayUnique = function (arr) {
	return arr.filter(function(item, index){
		return arr.indexOf(item) >= index;
	});
};



function add(){
  if (sessionStorage.getItem('friends')){
  var friends=sessionStorage.getItem('friends')
  var friends = friends.split(",")
  friends.push(document.getElementById("profile-name").innerHTML)
  friends=arrayUnique(friends)
  sessionStorage.setItem('friends',friends)
  console.log(sessionStorage.getItem('friends'))
}
else{
  var friends=[document.getElementById("profile-name").innerHTML]
  friends.push('Garrett Matsuda')
  friends.push('Ryan Rawitscher')
  friends.push('Can Divitoglu')
  sessionStorage.setItem('friends',friends)
  console.log(sessionStorage.getItem('friends'))
}
document.getElementById("add-button").style.backgroundColor="green"
document.getElementById("add-button").innerHTML="Added"
}
