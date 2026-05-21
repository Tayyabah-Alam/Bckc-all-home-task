console.log("javascript connected!");
// Assignment 1 (ALERTS):

// Question 1 :
//alert("Welcome to our website! We hope you have a great experience.");



// Question 2 :
// alert("Error! Please enter a valid password.");



// Question 3 :
//alert("Welcome to JS Land...Happy Coding!");



// Question 4 :
// alert("Welcome to JS Land...");
// alert("Happy Coding!");



// Question 5 :
// alert("Hello... I can run JS through my web browser's console");



//Question 6 :
//alert("Welcome to apple website!");



//Assignment 2 (VARIABLES FOR STRINGS):

//Question 1:
// var username;
// console.log(username);



//Question 2:
// var myName = "Tayyabah Alam"; 
// console.log(myName);




//Question 3:
// var message;
// message = "Hello World";
// alert(message);


//Question 4:
// var studentName = "Jhone Doe";
// var studentAge = "15 years old";
// var studentCourse = "Certified Mobile Application Development";

// alert(studentName);
// alert(studentAge);
// alert(studentCourse);



//Question 5:
// var pizzaPattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizzaPattern);



//Question 6:
// var email = "tayyabah@gmail.com";
// alert("My email address is " + email);



//Question 7:
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);



//Question 8:
// document.write("Yah! I can write HTML content through JavaScript");



//Question 9:
// var decorativeString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(decorativeString);
// document.write(decorativeString);




//Assignment 3 (VARIABLES FOR NUMBERS):

//Question 1:
// var age = 16;
// alert("I am " + age + " years old");



//Question 2:
// var numberOfVisits = 15;
// document.write("You have visited this site " + numberOfVisits + " times.");



//Question 3:
// var birthYear = 2010;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear));



//Question 4:
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");



//Assignment 4 (VARIABLES NAMES:LEGAL & ILLEGAL):

//Question 1:
// var name = "John", age = 25, isStudent = true;



//Question 2:
// 5 LEGAL VARIABLE NAMES: 
// 1) Camel case 
// 2) Snake case 
// 3) Pascal case 
// 4) Underscore (_)
// 5) DollarSign ($)
// //5 ILLEGAL VARIABLE NAMES:
// 1) Space in VARIABLES
// 2) Number in starting
// 3) Js reserve keywords (var,alert,for)
// 4) ! ,@ ,& ,# 
// 5) % ,* , ()



//Question 3:
//Done on index.html



//Assignment 7 (USER INPUT & CONDOTIONAL STATEMENT):

//Question 1:
// var city = prompt("Enter your city name:");

// if (city && city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights"); 
// }



//Question 2:
// var gender = prompt("Please enter your gender (male/female):");

// if (gender && gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender && gender.toLowerCase() === "female") {
//     alert("Good Morning Ma'am.");
// }



//Question 3:
//TRAFFIC SIGNALS
// var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");

// if (signalColor) {
//     signalColor = signalColor.toLowerCase();
    
//     if (signalColor === "red") {
//         alert("Must Stop");
//     } else if (signalColor === "yellow") {
//         alert("Ready to move"); 
//     } else if (signalColor === "green") {
//         alert("Move now"); 
//     } else {
//         alert("Invalid traffic color");
//     }
// }



//Question 4:
// var remainingFuel = +prompt("Enter remaining fuel in your car (in litres):");

// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car"); 
// }



//Question 5:
// a) Alert displays
// b) No alert display
// c)i) No alert display
// ii) Alert display
// iii) No alert displays
// iv) Alert display
// d) Alert display
// e) Alert display
// f) Alert display



//Question 6:
//MARK SHEET:
// var sub1 = +prompt("Enter marks obtained in Subject 1:");
// var sub2 = +prompt("Enter marks obtained in Subject 2:");
// var sub3 = +prompt("Enter marks obtained in Subject 3:");
// var totalMarks = +prompt("Enter Total Marks:");

// var obtainedMarks = sub1 + sub2 + sub3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade = "";
// var remarks = "";

// if (percentage >= 80) {
//     grade = "A-one"; remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A"; remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B"; remarks = "You need to improve";
// } else {
//     grade = "Fail"; remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");



//Question 7:
//GUESSING GAME:
// var random = Math.floor(Math.random() * 10) + 1;

// var guess = +prompt("Type your guess from 1-10");

// if (guess === random) {
//     alert("Bingo!Correct Answer");
// } else if (guess + 1 === random || guess - 1 === random) {
  
//     alert("Close enough to the correct answer");
// } else {
//     alert("better luck next time" + " " + "Right number was" + " " + random);
// }



//Question 8:
//NUMBER THAT IS DIVISIBLE BY 3:
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }



//Question 9:
//CHECKING EVEN/ODD NUMBER:
// var checkNum = +prompt("Enter a number to check if it's Even or Odd:");

// if (checkNum % 2 === 0) {
//     alert(checkNum + " is an Even number");
// } else {
//     alert(checkNum + " is an Odd number");
// }



//Question 10:
//CHECKING WEATHER:
// var temp = +prompt("Enter today's temperature:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It is freezing outside!");
// }



//Question 11:
//CALCULATOR:
// var firstNum = +prompt("Enter first number:");
// var operation = prompt("Enter operation type (+, -, *, /, %):");
// var secondNum = +prompt("Enter second number:");

// var result;

// if (operation === "+") {
//     result = firstNum + secondNum;
// } else if (operation === "-") {
//     result = firstNum - secondNum;
// } else if (operation === "*") {
//     result = firstNum * secondNum;
// } else if (operation === "/") {
//     result = firstNum / secondNum;
// } else if (operation === "%") {
//     result = firstNum % secondNum;
// } else {
//     alert("Please! Type an Invalid Operator");
// }

// if (result !== undefined) {
//     alert("The result is: " + result);
// }



//Assignment 8 (IF/ELSE $ ELSE/IF STATEMEMTS......TESTING SETS OF CONDITION):

//Question 1:
// var input = prompt("Enter a character (number or letter):");

// var asciiCode = input.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log("The input is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log("The input is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log("The input is a lowercase letter.");
// } else {
//     console.log("The input is a special character or symbol.");
// }



//Question 2:
// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");

// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
// } else {
//     console.log("Both integers are equal.");
// }



//Question 3:
//CHECKING THE NUMBER IS POSITIVE,NEGATIVE OR ZERO:
// var number = +prompt("Enter a number:");

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }



//Question 4:
//VOWELS CHECKING:
// var char = prompt("Enter a single character:").toLowerCase();

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log(true);
// } else {
//     console.log(false);
// }



//Question 5:
//PASSWORD CHECKING:
// var correctPassword = "@tayyabah123";
// var userPassword = prompt("Please enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password");
// }



//Question 6:
//CORRECTING MISTAKE:
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);



//Question 7:
//TIME FORMAT:
// var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

// if (time >= 0000 && time < 1200) {
//     console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     console.log("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     console.log("Good night!");
// } else {
//     console.log("Invalid time format entered.");
// }



//Assignment 9 (ARRAY):
//Question 1:
// var studentNamesLiteral = [];
// console.log(studentNamesLiteral);




//Question 2:
// var studentNamesObject = new Array();
// console.log(studentNamesObject);




//Question 3:
// var stringArray = ["Apple", "Banana", "Mango", "Orange"];
// console.log(stringArray);




//Question 4:
// var numberArray = [10, 20, 30, 40, 50];



//Question 5:
// var booleanArray = [true, false];
// console.log(booleanArray);




//Question 6:
// var mixedArray = ["Afraa", 16, true, null, undefined];
// console.log(mixedArray);




//Question 7:
// var qualifications = ["SSC", "HSSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h3>Qualifications:</h3>");

// document.write("1) " + qualifications[0] + "<br>");
// document.write("2) " + qualifications[1] + "<br>");
// document.write("3) " + qualifications[2] + "<br>");
// document.write("4) " + qualifications[3] + "<br>");
// document.write("5) " + qualifications[4] + "<br>");
// document.write("6) " + qualifications[5] + "<br>");
// document.write("7) " + qualifications[6] + "<br>");
// document.write("8) " + qualifications[7] + "<br>");



//Question 8:
// var names = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;

// var per1 = (scores[0] / totalMarks) * 100;
// var per2 = (scores[1] / totalMarks) * 100;
// var per3 = (scores[2] / totalMarks) * 100;


// document.write("Score of " + names[0] + " is " + scores[0] + ". Percentage: " + per1 + "%<br>");
// document.write("Score of " + names[1] + " is " + scores[1] + ". Percentage: " + per2 + "%<br>");
// document.write("Score of " + names[2] + " is " + scores[2] + ". Percentage: " + per3 + "%<br>");



//Question 9:

// var colors = ["Red", "Green", "Blue"];
// document.write("<b>Initial Colors:</b> " + colors + "<br><br>");

// // (Part a)
// var firstColor = prompt("Enter a color to add to the beginning:");
// colors.unshift(firstColor); 
// document.write("<b>a. Added to beginning:</b> " + colors + "<br><br>");

// //  (Part b)
// var lastColor = prompt("Enter a color to add to the end:");
// colors.push(lastColor); 
// document.write("<b>b. Added to end:</b> " + colors + "<br><br>");

// // (Part c)
// colors.unshift("Yellow", "Purple");
// document.write("<b>c. Added Yellow & Purple to beginning:</b> " + colors + "<br><br>");

// //  (Part d)
// colors.shift(); 
// document.write("<b>d. Deleted first color:</b> " + colors + "<br><br>");

// //  (Part e)
// colors.pop(); 
// document.write("<b>e. Deleted last color:</b> " + colors + "<br><br>");

// //  (Part f)
// var addIndex = prompt("At what position (0, 1, 2...) do you want to add a color?");
// var newColor = prompt("What color do you want to add there?");
// colors.splice(addIndex, 0, newColor); 
// document.write("<b>f. Added " + newColor + " at position " + addIndex + ":</b> " + colors + "<br><br>");

// //  (Part g)
// var deleteIndex = prompt("At what position (0, 1, 2...) do you want to delete color(s)?");
// var deleteCount = prompt("How many colors do you want to delete?");
// colors.splice(deleteIndex, deleteCount); 
// document.write("<b>g. Removed colors:</b> " + colors + "<br>");



//Question 10:
// var originalScores = [320, 230, 480, 120];
// var orderedScores = [120, 230, 320, 480];

// document.write("Scores of Students: " + originalScores + "<br>");
// document.write("Ordered Scores of Students: " + orderedScores + "<br>");



//Question 11:
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = cities.slice(2, 4);
// document.write("Cities list:<br>" + cities + "<br><br>Selected cities list:<br>" + selectedCities);



//Question 12:
// var arr = ["This ", " is ", " my ", " cat"];
// document.write("<strong>Array:</strong><br>" + arr.join(",") + "<br><br>");

// var singleString = arr.join("");
// document.write("<strong>String:</strong><br>" + singleString + "<br>");



//Question 13:
//FIFO(FIRST IN FIRST OUT):
// var devices = [];

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// var out1 = devices.shift(); 
// var out2 = devices.shift(); 
// var out3 = devices.shift(); 
// var out4 = devices.shift(); 

// document.write("Out:<br>" + out1 + "<br>Out:<br>" + out2 + "<br>Out:<br>" + out3 + "<br>Out:<br>" + out4);



// (ALHAMDULILLAH COMPLETED)