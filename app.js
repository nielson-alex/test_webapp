//define variables
var calories = document.getElementsByClassName("calories");
var calEaten = 0;
var dayOfWeek = "";
var poundsLost = 0;
var maintenance;
var userName = "";
var ls = localStorage;

				
//orphaned functions 
for (i = 0; i < calories.length; i++) {
	document.getElementsByClassName("calories")[i].onfocus = clearFields;
	document.getElementsByClassName("calories")[i].onblur = fillCalorieFields;
	document.getElementsByClassName("meals")[i].onfocus = clearFields;
}

//checkboxes
document.getElementById("userNameAlex").onchange = changeUserName;
document.getElementById("userNameMatt").onchange = changeUserName;
document.getElementById("userNameKaren").onchange = changeUserName;



//define functions
//individualize results based on user
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

//empty out calories textbox fields when you click on them
function clearFields() {
	this.value="";
}

function fillCalorieFields() {
	if (this.value == "") {
		this.value="Calories";
	}
}

//main "save calorie" function
function saveCalories(meals, daysCalories, calories, calEaten, poundsLost, dayOfWeek) {
	switch(userName.toLowerCase()) {
		case "alex" :
			if (isNaN(localStorage.sundayCaloriesAlex)) {
				for (var i=0; i < calories.length; i++) {
					if (calories[i].value == "Calories") {
						calories[i].value = 0;
					} else {
						calEaten += parseInt(calories[i].value);
					}
				}
				var poundsLost = (2275 - calEaten) / 3500;

				console.log("Calories eaten on " + dayOfWeek + ": " + calEaten);
				console.log("Approximate weight lost on " + dayOfWeek + ": " + poundsLost.toFixed(2));
				
				for (var i = 0; i < 6; i++) {
					localStorage.setItem(dayOfWeek + userName + "Meal" + i, meals[i].value);
					localStorage.setItem(dayOfWeek + userName + "Meal" + i + "Calories", daysCalories[i].value);
				}

				localStorage.setItem(userName.toLowerCase() + "Calories" + dayOfWeek, calEaten);
				localStorage.setItem(userName.toLowerCase() + "PoundsLost" + dayOfWeek, poundsLost.toFixed(2));
			} else {
				console.log("You need to clear the local storage first before you can save a new value.");
				alert("You need to clear the local storage first before you can save a new value.");
				return; 
			}
			
			break;
		case "matt" :
			if (isNaN(localStorage.sundayCaloriesMatt)) {
				for (var i=0; i < calories.length; i++) {
					if (calories[i].value == "Calories") {
						calories[i].value = 0;
					} else {
						calEaten += parseInt(calories[i].value);
					}
				}
				var poundsLost = (2275 - calEaten) / 3500;

				console.log("Calories eaten on " + dayOfWeek + ": " + calEaten);
				console.log("Approximate weight lost on " + dayOfWeek + ": " + poundsLost.toFixed(2));
				
				for (var i = 0; i < 6; i++) {
					localStorage.setItem(dayOfWeek + userName + "Meal" + i, meals[i].value);
					localStorage.setItem(dayOfWeek + userName + "Meal" + i + "Calories", daysCalories[i].value);
				}

				localStorage.setItem(userName.toLowerCase() + "Calories" + dayOfWeek, calEaten);
				localStorage.setItem(userName.toLowerCase() + "PoundsLost" + dayOfWeek, poundsLost.toFixed(2));
			} else {
				console.log("You need to clear the local storage first before you can save a new value.");
				alert("You need to clear the local storage first before you can save a new value.");
				return; 
			}
			break;
		default:
			console.log("Select a user.");
			return;
	}
}

//"save calorie" functions for each day
//sunday
function saveSundayCal() {
	var sundayMeals = document.getElementsByClassName("sundayMeals");
	var sundayCalories = document.getElementsByClassName("sundayCalories");
	saveCalories(sundayMeals, sundayCalories, calories, calEaten, poundsLost, "Sunday");
}

//monday
function saveMondayCal() {
	var mondayMeals = document.getElementsByClassName("mondayMeals");
	var mondayCalories = document.getElementsByClassName("mondayCalories");
	saveCalories(mondayMeals, mondayCalories, calories, calEaten, poundsLost, "Monday");
}

//tuesday
function saveTuesdayCal() {
	var tuesdayMeals = document.getElementsByClassName("tuesdayMeals");
	var tuesdayCalories = document.getElementsByClassName("tuesdayCalories");
	saveCalories(tuesdayMeals, tuesdayCalories, calories, calEaten, poundsLost, "Tuesday");
}

//wednesday
function saveWednesdayCal() {
	var wednesdayMeals = document.getElementsByClassName("wednesdayMeals");
	var wednesdayCalories = document.getElementsByClassName("wednesdayCalories");
	saveCalories(wednesdayMeals, wednesdayCalories, calories, calEaten, poundsLost, "Wednesday");
}

//thursday
function saveThursdayCal() {
	var thursdayMeals = document.getElementsByClassName("thursdayMeals");
	var thursdayCalories = document.getElementsByClassName("thursdayCalories");
	saveCalories(thursdayMeals, thursdayCalories, calories, calEaten, poundsLost, "Thursday");
}

//friday
function saveFridayCal() {
	var fridayMeals = document.getElementsByClassName("fridayMeals");
	var fridayCalories = document.getElementsByClassName("fridayCalories");
	saveCalories(fridayMeals, fridayCalories, calories, calEaten, poundsLost, "Friday");
}

//saturday
function saveSaturdayCal() {
	var saturdayMeals = document.getElementsByClassName("saturdayMeals");
	var saturdayCalories = document.getElementsByClassName("saturdayCalories");
	saveCalories(saturdayMeals, saturdayCalories, calories, calEaten, poundsLost, "Saturday");
}


//main "retrieve calorie" function
function seeDaysCal(userCaloriesEaten, userPoundsLost, meals) {
	switch(userName.toLowerCase()) {
		case "alex" :			
			//if (10 == 41//isNaN(ls.alexCaloriesSunday) && isNaN(ls.alexCaloriesMonday) && isNaN(ls.alexCaloriesTuesday)
				/*&& isNaN(ls.alexCaloriesWednesday) && isNaN(ls.alexCaloriesThursday) && isNaN(ls.alexCaloriesFriday) && isNaN(ls.alexCaloriesSaturday)*///) {
				//console.log("Nothing has been saved to local storage.");
				//return;
			//} else {
				document.write("You ate a total of " + userCaloriesEaten + " calories on Sunday and lost approximately " +
				userPoundsLost + " pounds." + "<br>");
				document.write(meals);
			//}
			break;
		case "matt" :
			//if (/*isNaN(localStorage.mattCaloriesSunday*/)) {
			//	console.log("Nothing has been saved to local storage");
				//return;
			//} else {
				document.write("You ate a total of " + userCaloriesEaten + " calories on Sunday and lost approximately " +
				userPoundsLost + " pounds." + "<br>");
				document.write(meals);
			//}
			break;
		default:
			console.log("Select a user.");
			return;
	}
}

//"retrieve calorie" functions for individual days
//sunday
function seeSundayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var sundayAlexMeals = ls.SundayAlexMeal0 + ": " + ls.SundayAlexMeal0Calories + "<br>" +
				ls.SundayAlexMeal1 + ": " + ls.SundayAlexMeal1Calories + "<br>" + 
				ls.SundayAlexMeal2 + ": " + ls.SundayAlexMeal2Calories + "<br>" + 
				ls.SundayAlexMeal3 + ": " + ls.SundayAlexMeal3Calories + "<br>" + 
				ls.SundayAlexMeal4 + ": " + ls.SundayAlexMeal4Calories + "<br>" + 
				ls.SundayAlexMeal5 + ": " + ls.SundayAlexMeal5Calories + "<br>";
			
			seeDaysCal(localStorage.alexCaloriesSunday, localStorage.alexPoundsLostSunday, sundayAlexMeals);
			break;
		case "matt" :
			var sundayMattMeals = ls.SundayMattMeal0 + ": " + ls.SundayMattMeal0Calories + "<br>" +
				ls.SundayMattMeal1 + ": " + ls.SundayMattMeal1Calories + "<br>" + 
				ls.SundayMattMeal2 + ": " + ls.SundayMattMeal2Calories + "<br>" + 
				ls.SundayMattMeal3 + ": " + ls.SundayMattMeal3Calories + "<br>" + 
				ls.SundayMattMeal4 + ": " + ls.SundayMattMeal4Calories + "<br>" + 
				ls.SundayMattMeal5 + ": " + ls.SundayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesSunday, localStorage.mattPoundsLostSunday, sundayMattMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	}
}

//monday
function seeMondayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var mondayMeals = ls.MondayAlexMeal0 + ": " + ls.MondayAlexMeal0Calories + "<br>" +
				ls.MondayAlexMeal1 + ": " + ls.MondayAlexMeal1Calories + "<br>" + 
				ls.MondayAlexMeal2 + ": " + ls.MondayAlexMeal2Calories + "<br>" + 
				ls.MondayAlexMeal3 + ": " + ls.MondayAlexMeal3Calories + "<br>" + 
				ls.MondayAlexMeal4 + ": " + ls.MondayAlexMeal4Calories + "<br>" + 
				ls.MondayAlexMeal5 + ": " + ls.MondayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesMonday, localStorage.alexPoundsLostMonday, mondayMeals);
			break;
		case "matt" :
			var mondayMattMeals = ls.MondayMattMeal0 + ": " + ls.MondayMattMeal0Calories + "<br>" +
				ls.MondayMattMeal1 + ": " + ls.MondayMattMeal1Calories + "<br>" + 
				ls.MondayMattMeal2 + ": " + ls.MondayMattMeal2Calories + "<br>" + 
				ls.MondayMattMeal3 + ": " + ls.MondayMattMeal3Calories + "<br>" + 
				ls.MondayMattMeal4 + ": " + ls.MondayMattMeal4Calories + "<br>" + 
				ls.MondayMattMeal5 + ": " + ls.MondayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesMonday, localStorage.mattPoundsLostMonday, mondayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}

//tuesday
function seeTuesdayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var tuesdayMeals = ls.TuesdayAlexMeal0 + ": " + ls.TuesdayAlexMeal0Calories + "<br>" +
				ls.TuesdayAlexMeal1 + ": " + ls.TuesdayAlexMeal1Calories + "<br>" + 
				ls.TuesdayAlexMeal2 + ": " + ls.TuesdayAlexMeal2Calories + "<br>" + 
				ls.TuesdayAlexMeal3 + ": " + ls.TuesdayAlexMeal3Calories + "<br>" + 
				ls.TuesdayAlexMeal4 + ": " + ls.TuesdayAlexMeal4Calories + "<br>" + 
				ls.TuesdayAlexMeal5 + ": " + ls.TuesdayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesTuesday, localStorage.alexPoundsLostTuesday, tuesdayMeals);
			break;
		case "matt" :
			var tuesdayMeals = ls.TuesdayMattMeal0 + ": " + ls.TuesdayMattMeal0Calories + "<br>" +
				ls.TuesdayMattMeal1 + ": " + ls.TuesdayMattMeal1Calories + "<br>" + 
				ls.TuesdayMattMeal2 + ": " + ls.TuesdayMattMeal2Calories + "<br>" + 
				ls.TuesdayMattMeal3 + ": " + ls.TuesdayMattMeal3Calories + "<br>" + 
				ls.TuesdayMattMeal4 + ": " + ls.TuesdayMattMeal4Calories + "<br>" + 
				ls.TuesdayMattMeal5 + ": " + ls.TuesdayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesTuesday, localStorage.mattPoundsLostTuesday, tuesdayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}

//wednesday
function seeWednesdayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var wednesdayMeals = ls.WednesdayAlexMeal0 + ": " + ls.WednesdayAlexMeal0Calories + "<br>" +
				ls.WednesdayAlexMeal1 + ": " + ls.WednesdayAlexMeal1Calories + "<br>" + 
				ls.WednesdayAlexMeal2 + ": " + ls.WednesdayAlexMeal2Calories + "<br>" + 
				ls.WednesdayAlexMeal3 + ": " + ls.WednesdayAlexMeal3Calories + "<br>" + 
				ls.WednesdayAlexMeal4 + ": " + ls.WednesdayAlexMeal4Calories + "<br>" + 
				ls.WednesdayAlexMeal5 + ": " + ls.WednesdayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesWednesday, localStorage.alexPoundsLostWednesday, wednesdayMeals);
			break;
		case "matt" :
			var wednesdayMeals = ls.WednesdayMattMeal0 + ": " + ls.WednesdayMattMeal0Calories + "<br>" +
				ls.WednesdayMattMeal1 + ": " + ls.WednesdayMattMeal1Calories + "<br>" + 
				ls.WednesdayMattMeal2 + ": " + ls.WednesdayMattMeal2Calories + "<br>" + 
				ls.WednesdayMattMeal3 + ": " + ls.WednesdayMattMeal3Calories + "<br>" + 
				ls.WednesdayMattMeal4 + ": " + ls.WednesdayMattMeal4Calories + "<br>" + 
				ls.WednesdayMattMeal5 + ": " + ls.WednesdayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesWednesday, localStorage.mattPoundsLostWednesday, wednesdayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}

//thursday
function seeThursdayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var thursdayMeals = ls.ThursdayAlexMeal0 + ": " + ls.ThursdayAlexMeal0Calories + "<br>" +
				ls.ThursdayAlexMeal1 + ": " + ls.ThursdayAlexMeal1Calories + "<br>" + 
				ls.ThursdayAlexMeal2 + ": " + ls.ThursdayAlexMeal2Calories + "<br>" + 
				ls.ThursdayAlexMeal3 + ": " + ls.ThursdayAlexMeal3Calories + "<br>" + 
				ls.ThursdayAlexMeal4 + ": " + ls.ThursdayAlexMeal4Calories + "<br>" + 
				ls.ThursdayAlexMeal5 + ": " + ls.ThursdayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesThursday, localStorage.alexPoundsLostThursday, thursdayMeals);
			break;
		case "matt" :
			var thursdayMeals = ls.ThursdayMattMeal0 + ": " + ls.ThursdayMattMeal0Calories + "<br>" +
				ls.ThursdayMattMeal1 + ": " + ls.ThursdayMattMeal1Calories + "<br>" + 
				ls.ThursdayMattMeal2 + ": " + ls.ThursdayMattMeal2Calories + "<br>" + 
				ls.ThursdayMattMeal3 + ": " + ls.ThursdayMattMeal3Calories + "<br>" + 
				ls.ThursdayMattMeal4 + ": " + ls.ThursdayMattMeal4Calories + "<br>" + 
				ls.ThursdayMattMeal5 + ": " + ls.ThursdayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesThursday, localStorage.mattPoundsLostThursday, thursdayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}

//friday
function seeFridayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var fridayMeals = ls.FridayAlexMeal0 + ": " + ls.FridayAlexMeal0Calories + "<br>" +
				ls.FridayAlexMeal1 + ": " + ls.FridayAlexMeal1Calories + "<br>" + 
				ls.FridayAlexMeal2 + ": " + ls.FridayAlexMeal2Calories + "<br>" + 
				ls.FridayAlexMeal3 + ": " + ls.FridayAlexMeal3Calories + "<br>" + 
				ls.FridayAlexMeal4 + ": " + ls.FridayAlexMeal4Calories + "<br>" + 
				ls.FridayAlexMeal5 + ": " + ls.FridayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesFriday, localStorage.alexPoundsLostFriday, fridayMeals);
			break;
		case "matt" :
			var fridayMeals = ls.FridayMattMeal0 + ": " + ls.FridayMattMeal0Calories + "<br>" +
				ls.FridayMattMeal1 + ": " + ls.FridayMattMeal1Calories + "<br>" + 
				ls.FridayMattMeal2 + ": " + ls.FridayMattMeal2Calories + "<br>" + 
				ls.FridayMattMeal3 + ": " + ls.FridayMattMeal3Calories + "<br>" + 
				ls.FridayMattMeal4 + ": " + ls.FridayMattMeal4Calories + "<br>" + 
				ls.FridayMattMeal5 + ": " + ls.FridayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesFriday, localStorage.mattPoundsLostFriday, fridayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}

//saturday
function seeSaturdayCal(){
	switch(userName.toLowerCase()) {
		case "alex" :
			var saturdayMeals = ls.SaturdayAlexMeal0 + ": " + ls.SaturdayAlexMeal0Calories + "<br>" +
				ls.SaturdayAlexMeal1 + ": " + ls.SaturdayAlexMeal1Calories + "<br>" + 
				ls.SaturdayAlexMeal2 + ": " + ls.SaturdayAlexMeal2Calories + "<br>" + 
				ls.SaturdayAlexMeal3 + ": " + ls.SaturdayAlexMeal3Calories + "<br>" + 
				ls.SaturdayAlexMeal4 + ": " + ls.SaturdayAlexMeal4Calories + "<br>" + 
				ls.SaturdayAlexMeal5 + ": " + ls.SaturdayAlexMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.alexCaloriesSaturday, localStorage.alexPoundsLostSaturday, saturdayMeals);
			break;
		case "matt" :
			var saturdayMeals = ls.SaturdayMattMeal0 + ": " + ls.SaturdayMattMeal0Calories + "<br>" +
				ls.SaturdayMattMeal1 + ": " + ls.SaturdayMattMeal1Calories + "<br>" + 
				ls.SaturdayMattMeal2 + ": " + ls.SaturdayMattMeal2Calories + "<br>" + 
				ls.SaturdayMattMeal3 + ": " + ls.SaturdayMattMeal3Calories + "<br>" + 
				ls.SaturdayMattMeal4 + ": " + ls.SaturdayMattMeal4Calories + "<br>" + 
				ls.SaturdayMattMeal5 + ": " + ls.SaturdayMattMeal5Calories + "<br>";
				
			seeDaysCal(localStorage.mattCaloriesSaturday, localStorage.mattPoundsLostSaturday, saturdayMeals);
			break;
		default :
			console.log("Please select a user.");
			return;
	};
}