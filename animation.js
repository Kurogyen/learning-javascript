function moveMe () {
	// get the object we wanna moveMe
	var object = document.getElementById("animate");
	var object2 = document.getElementById("animater");
	var object3 = document.getElementById("anime");
	var object4 = document.getElementById("animatron");
	
	var posX = 0; //initial x position
	var posY = 0; //initial y position
	var posX2 = 350;
	var posY2 = 350;
	var posX3 = 350; //topright
	var posY3 = 0;
	var posX4 = 0; //botomleft
	var posY4 = 350;
	//create an interval
	// setInterval(function to call, nomilliseconds)
	var timer = setInterval(move, 10);
	function move() {
		if (posX >= 350) {
			posX = 0;
			posY = 0;
		}
		if (posX2 <= 0) {
			posX2 = 350;
			posY2 = 350;
		}
		if (posX3 <= 0) {
			posX3 = 350;
			posY3 = 0;
		}
		if (posX4 >= 350) {
			posX4 = 0;
			posY4 = 350;
		}
		object.style.top = posY + "px";
		object.style.left = posX + "px";
		posX = posX + 1;
		posY = posY + 1;
		
		object2.style.top = posY2 + "px";
		object2.style.left = posX2 + "px";
		posX2 = posX2 - 1;
		posY2 = posY2 - 1;
		
		object3.style.top = posY3 + "px";
		object3.style.left = posX3 + "px";
		posX3 = posX3 - 1;
		posY3 = posY3 + 1;
		
		object4.style.top = posY4 + "px";
		object4.style.left = posX4 + "px";
		posX4 = posX4 + 1;
		posY4 = posY4 - 1;
	}
}
