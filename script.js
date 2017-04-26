function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

// Calculator

function calcButton(num) {
	var result = document.getElementById("result");
	if (result.value === "0") {
		result.value = "";
	}
	result.value = result.value + num;
}

function calcButtonDot() {
	var result = document.getElementById("result");
	result.value = result.value + ".";
	// Disable button
	document.getElementById("dot").disabled = true;
}

function calcButtonOp(operator) {
	var result = document.getElementById("result");
	
	document.getElementById("temp").value = result.value;
	document.getElementById("operator").value = operator;
	
	// Disable buttons
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("divide").disabled = true;
	
	// Reset result
	result.value = 0;
	
	// Enable dot
	document.getElementById("dot").disabled = false;
	
	// Enable equals sign
	document.getElementById("equals").disabled = false;
}

function equals() {
	var temp = document.getElementById("temp").value;
	var result = document.getElementById("result").value;
	var operator = document.getElementById("operator").value;
	var total = 0;
	if (operator === "+") {
		total = Number(temp) + Number(result);
	}
	else if (operator === "-") {
		total = Number(temp) - Number(result);
	}
	else if (operator === "x") {
		total = Number(temp) * Number(result);
	}
	else {
		total = Number(temp) / Number(result);
	}
	
	document.getElementById("result").value = total;
	
	// Clear temp and operator
	document.getElementById("temp").value = "";
	document.getElementById("operator").value = "";
	
	// Disable buttons
	document.getElementById("equals").disabled = true;
	document.getElementById("dot").disabled = true;
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("zero").disabled = true;
	document.getElementById("one").disabled = true;
	document.getElementById("two").disabled = true;
	document.getElementById("three").disabled = true;
	document.getElementById("four").disabled = true;
	document.getElementById("five").disabled = true;
	document.getElementById("six").disabled = true;
	document.getElementById("seven").disabled = true;
	document.getElementById("eight").disabled = true;
	document.getElementById("nine").disabled = true;
}

// Forms

function login() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error");
	
	// Check that the user and password are not blank
	if (username.value.length === 0) {
		error.innerHTML = "Please enter a user or email!";
		return false;
	}
	if (password.value.length === 0) {
		error.innerHTML = "Please enter a password!";
		return false;
	}
	
	// Check that the password is correct
	var realPassword = "abc123";
	if (password.value != realPassword) {
		error.innerHTML = "Wrong password!";
		return false;
	}
	else {
		return true;
	}
}

// Function used to get URL parameters
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function loadHome() {
	var username = getParameterByName("username");
	// Create a new <p> element to show the username
	var newP = document.createElement("p");
	newP.innerHTML = "Welcome, " + username;
	// Add the new <p> to the logout bar
	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP);
	
	// Create a logout button
	var logoutButton = document.createElement("button");
	logoutButton.innerHTML = "Log out";
	logoutButton.setAttribute("class", "form-button");
	logoutButton.setAttribute("onclick", "logout();");
	// <button class="form-button" onclick="logout();">Log out</button>
	logoutBar.appendChild(logoutButton);
}

function logout() {
	// Take me back to forms.html
	window.location = "forms.html";
}

// Exercise:
// 1. Complete the blog posts
// 2. Add date to blog post
// 3. Add username to blog post
function addBlogPost() {
	var kjdshfk = document.getElementById("blogs");
	var advgh = document.createElement("p");
	advgh.innerHTML = "HELLO!";
	kjdshfk.appendChild(advgh);
}

// Part 1: Automatically do something when page loads
function autoload() {
	// Write some text to the console
	console.log("Welcome!");
	
	// Add some content to <div id="part1">
	// 1. Get the div where you want to add the content
	var part1Div = document.getElementById("part1");
	// 2. Create new element(s) to put inside the <div>
	var newHeader = document.createElement("h3");
	var newParagraph = document.createElement("p");
	// 3. Put some text in those new elements
	newHeader.innerHTML = "Part 1 - On Load";
	newParagraph.innerHTML = "Automatically do stuff!";
	// 4. Add new elements to the <div>
	part1Div.appendChild(newHeader);
	part1Div.appendChild(newParagraph);
	part1Div.appendChild(document.createElement("hr"));
}

// Part 2: Add text from input
function addText() {
	// 1. Get the input
	var input = document.getElementById("part2-input");
	// 2. Get <div> where I want to add the text
	var div = document.getElementById("part2");
	
	var newParagraph = document.createElement("p");
	newParagraph.innerHTML = input.value;
	
	div.appendChild(newParagraph);
}

// Part 3: Change Style
function changeStyle() {
	var part3p = document.getElementById("part3-p");
	part3p.setAttribute("class", "new-style");
}
// Part 4: Page Style
function OGstyle() {
	var OG4 = document.getElementById("body");
	OG4.setAttribute("class", "body-styleog");
}
function changeStyle1() {
	var part41 = document.getElementById("body");
	part41.setAttribute("class", "body-style1");
}


function changeStyle2() {
	var part42 = document.getElementById("body");
	part42.setAttribute("class", "body-style2");
}


function changeStyle3() {
	var part43 = document.getElementById("body");
	part43.setAttribute("class", "body-style3");
}
// Part 5: Add Image
function addImg() {
	var imginput = document.createElement("img");
	imginput.setAttribute("src", "img/cat.jpg");
	var catdiv = document.getElementById("part5");
	catdiv.appendChild(imginput);
}
// Image Gallery
function changeimg1() {
	var part61 = document.getElementById("mainimg");
	part61.setAttribute("src", "img/cat.jpg");
}
function changeimg2() {
	var part62 = document.getElementById("mainimg");
	part62.setAttribute("src", "img/cat2.jpg");
}
function changeimg3() {
	var part63 = document.getElementById("mainimg");
	part63.setAttribute("src", "img/cat3.jpg");
}
function changeimg4() {
	var part64 = document.getElementById("mainimg");
	part64.setAttribute("src", "img/cat4.jpg");
}
function changeimg5() {
	var part65 = document.getElementById("mainimg");
	part65.setAttribute("src", "img/cat5.jpg");
}
















