//define variables
var calories = document.getElementsByClassName("calories");
var calEaten = 0;
var maintenance;
var poundsLost;
var userName = "";

//orphaned functions 
for (i = 0; i < calories.length; i++) {
	document.getElementsByClassName("calories")[i].onfocus = clearFields;
	document.getElementsByClassName("calories")[i].onblur = fillCalorieFields;
	document.getElementsByClassName("meals")[i].onfocus = clearFields;

}


//define functions
//checkbox names
document.getElementById("userNameAlex").onchange = changeUserName;
document.getElementById("userNameMatt").onchange = changeUserName;
document.getElementById("userNameKaren").onchange = changeUserName;

function changeUserName() {
	switch(this.id) {
		case "userNameAlex" : 
			if (userName != "Alex") {
				userName = "Alex";
				this.checked = true;
				if (this.checked == true) {
					for (i = 0; i < document.getElementsByTagName("input").length; i++) {
						document.getElementsByTagName("input")[i].checked = false;
						this.checked = true;
					}
				}
			} else {
				userName = "";
			}
			console.log(userName);
			break;
		case "userNameMatt" :
			if (userName != "Matt") {
				userName = "Matt";
				this.checked = true;
				if (this.checked == true) {
					for (i = 0; i < document.getElementsByTagName("input").length; i++) {
						document.getElementsByTagName("input")[i].checked = false;
						this.checked = true;
					}
				}
			} else {
				userName = "";
			}
			console.log(userName);
			break;
		case "userNameKaren" : 
			if (userName != "Karen") {
				userName = "Karen";
				this.checked = true;
				if (this.checked == true) {
					for (i = 0; i < document.getElementsByTagName("input").length; i++) {
						document.getElementsByTagName("input")[i].checked = false;
						this.checked = true;
					}
				}
			} else {
				userName = "";
			}
			console.log(userName);
			break;
		default :
			console.log("Stop it, you");
	}
}

//emptying out calories textbox fields when you click on them
function clearFields() {
	this.value="";
}

function fillCalorieFields() {
	if (this.value == "") {
		this.value="Calories";
	}
}


//total up the number entered in each calorie textbox and save the value as calEaten
/*function saveCal() {
	for (var i=0; i < calories.length; i++) {
		calEaten += parseInt(calories[i].value);
	}
	
	console.log("Total calories eaten: " + calEaten);
}*/

function calcWeightLoss(calEaten, maintenance, poundsLost) {
	document.write("Congratulations " + userName + ", you have accumulated a deficit of " + 
	(maintenance - calEaten) + " calories and lost " + poundsLost.toFixed(2) + " pounds today!");
}


//when you press the submit button
function submit() {
	for (var i=0; i < calories.length; i++) {
		calEaten += parseInt(calories[i].value);
	}
	console.log(calEaten);
	do {
		console.log("Please select a user");
	} while (document.getElementsByTagName("input").checked == false);
	identifyUser(userName);
}

function identifyUser() {
	switch(userName.toLowerCase()) {
		case "alex" :
			calcWeightLoss(calEaten, 2275, ((2275-calEaten) / 3500));
			break;
		case "matt" :
			calcWeightLoss(calEaten, 2715, ((2715-calEaten) / 3500));
			break;
		case "karen" :
			calcWeightLoss(calEaten, 1700, ((1700-calEaten) / 3500));
			break;
		default :
			return;
	}
}

// 450 300 150 400