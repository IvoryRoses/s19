//sebastianAbuyo
function login() {
	//user input popup
	userName = prompt("Enter your Username");
	userPass = prompt("Enter your Password");
	userRole = prompt("Enter your Role");
	if (userName == null || userPass == null || userRole == null) {
		//alert pop up
		alert("Hey man. Type smth")
	}
	else {
		switch(userRole) {
			case "admin": case"Admin":
				alert(`Welcome back to the class portal, admin! ${userName}`)
				break;
			case "teacher": case"Teacher":
				alert(`Thank you for logging in, teacher! ${userName}`)
				break;
			case "student": case"Student":
				alert(`Welcome to the class portal, student! ${userName}`)
				var userNum = [];
				//for loop userinput number that uses array for gradeCalcu function
				for (var i = 1; i <=  4; i++) {
					var userInput = parseFloat(prompt(`Enter Number ${i}`));
					userNum.push(userInput)
				}
				gradeCalcu(userNum[0],userNum[1],userNum[2],userNum[3]);
				break;
			default:
				alert(`Role out of range. ${userName}`);
				break;
		}
	}
}

function gradeCalcu(int1, int2, int3, int4) {
	var sum = int1 + int2 + int3 + int4;
    var average = sum / 4;
    //round up the sum
    average = Math.round(average);

	if (average >= 96) {
		console.log(`Hello, student, your average is ${average}. The letter equivalent is A+`);
	} else if (average >= 90 && average <= 95){
		console.log(`Hello, student, your average is ${average}. The letter equivalent is A`);
	} else if (average >= 85 && average <= 89){
		console.log(`Hello, student, your average is ${average}. The letter equivalent is B`);
	} else if (average >= 75 && average <= 84){
		console.log(`Hello, student, your average is ${average}. The letter equivalent is C`);
	} else {
		console.log(`Hello, student, your average is ${average}. The letter equivalent is F`);
	} //haha bobo
}

login()