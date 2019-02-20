// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = ["vl0", "vl1", "vl2", "vl3", "vl4", "vl5"];

var trackIndex = 6; //starts at The Less I Know The Better
var volumeLevel = 3; //sets the init volume level

var playing = false; //when opened songs dont automatically begin to play

function init() {
	var i;
	//fills volume bars to the init level
	for (i = 0; i < volumeLevel; i++){ 
 		document.getElementById(volLevels[i]).style.background = "#9f5cc4";
	}
};

function volUp() {
	var volumeIncreased = false;

	//checks to make sure that we don't go over our volume limit
	if (volumeLevel < 6) {
		volumeLevel += 1;
		volumeIncreased = true;
	}

	//checks if we changed the volume. if we did then it fills in the corresponding box
	if (volumeIncreased) {
		document.getElementById(volLevels[volumeLevel - 1]).style.background = "#9f5cc4";
	}
}

function volDown() {
	var volumeDecreased = false;

	//checks to make sure that we don't go under our volume limit
	if (volumeLevel > 0) {
		volumeLevel -= 1;
		volumeDecreased = true;
	}

	//checks if we changed the volume. if we did then it fills in the corresponding box
	if (volumeDecreased) {
		document.getElementById(volLevels[volumeLevel]).style.background = "white";
	}
}


function switchPlay() {
	var timervar;

	if (playing) {
		// if we switch from play->pause then we stop the interval function and change the icon
		document.getElementById("play").innerHTML = '<i class="material-icons">play_arrow</i>';
		clearInterval(timer);
		playing = false;
	} else {
		// if we switch from pause->play then we start the interval function, 1000ms = 1s. 
		document.getElementById("play").innerHTML = '<i class="material-icons">pause</i>';
		timer = setInterval(function() {
			// increment the slider
	        document.getElementById("slider").value++;
	        // increment the time tracker
	        document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("slider").value);
	        if(document.getElementById("slider").value == 180){ nextSong(); } } ,1000);
		playing = true;
	}
}

function nextSong() {
	// resets the slider and time tracker
	document.getElementById('slider').value = 0;
	document.getElementById('time-elapsed').innerHTML = secondsToMs(0);

	// handles edge case where we cycle back to the beginning of the album
	if(trackIndex < 9){
		trackIndex += 1;
	}
	else {
		trackIndex = 0;
	}
	document.getElementById("player-song-name").innerHTML = tracklist[trackIndex];
}

function prevSong() {
	// resets the slider and time tracker
	document.getElementById('slider').value = 0;
	document.getElementById('time-elapsed').innerHTML = secondsToMs(0);

	// handles edge case where we cycle back to the end of the album
	if(trackIndex > 0){
		trackIndex -= 1;
	}
	else {
		trackIndex = 9;
	}

	// updates the song title displayed
	document.getElementById("player-song-name").innerHTML = tracklist[trackIndex];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

init();