////////////////////////////////////////////////////
// Changing Case
////////////////////////////////////////////////////


////////////// Task 1 ////////////////
// var userInput = prompt("Write something in Lower Case")
// var upperCase = userInput.toUpperCase()
// document.write(upperCase)

////////////// Task 2 ////////////////
// var userInput = prompt("Write something in Upper Case")
// var lowerCase = userInput.toLowerCase()
// document.write(lowerCase)

////////////////////////////////////////////////////////////////////////
// Strings: Measuring Lengths and Extracting Parts
////////////////////////////////////////////////////////////////////////

////////////// Task 1 ////////////////
// var userInput = prompt("What is your favorite Mobile Modal?")
// document.write("<h1>" + "The length of the given Mobile Modal is " + userInput.length + "</h1>")

////////////// Task 2 ////////////////
// var userInput = prompt("What is your name?")
// var lastChar = userInput.charAt(userInput.length - 1)
// document.write("<h1>" + "The last character of your name is " + lastChar + "</h1>")

////////////////////////////////////////////////////////////////////////
// Strings: finding segments
////////////////////////////////////////////////////////////////////////

////////////// Task 1 ////////////////
// var country = "Pakistani"
// var lastChar = country.indexOf("n")
// document.write("<h1>" + "The index of the letter N in Pakistani is " + lastChar + "</h1>")
// document.write("<h1>" + "The index of the letter N in Pakistani is " + lastChar + "</h1>")

////////////// Task 2 ////////////////
// var userName = prompt("Enter your Username: ");
// var message;
// var split = [];
// var arr = [];
// for (var i = 0; i < userName.length; i++) {
//     split[i] = userName.split("&nbsp;");
//     arr[i] = userName.charCodeAt(i);
//     if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//         message = "Welcome on board.";
//     }
//     while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
//         alert("please enter a valid userName");
//         userName = prompt("Enter your Input: ");
//         for (var i = 0; i < userName.length; i++) {
//             split[i] = userName.split("&nbsp;");
//             arr[i] = userName.charCodeAt(i);
//             if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//                 break;
//             }
//         }
//     }

// }
// document.write("<h1>"+ message + "</h1>");

///////////////// Task 2 //////////////////
// function count(mainStr, subStri) 
//     {
//     mainStr += '';
//     subStri += '';
//     if (subStri.length <= 0) 
//     {
//         return mainStr.length + 1;
//     }
//        subStr = subStri.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (mainStr.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// var numOfThe = count("The quick brown fox jumps over the lazy dog", 'the');
// document.write("<h1>"+ "The number of The's in the string is " + numOfThe +  "</h1>");

////////////////////////////////////////////////////////////////////////
// Strings: finding a character at a location
////////////////////////////////////////////////////////////////////////

///////////////// Task 1 //////////////////
// var string = "Pakistani"
// var index = string.charAt(3)
// document.write("<h1>" + "The character at 3rd index in the word Pakistani is " + index + "." + "</h1>")

////////////////////////////////////////////////////////////////////////
// Strings: finding a character at a location
////////////////////////////////////////////////////////////////////////

///////////////// Task 1 //////////////////
// var string = "Hyderabad"
// var index = string.replace("Hyder" , "Islam")
// document.write("<h1>" + "The word Hyderabad replace to " + index + "." + "</h1>")

///////////////// Task 2 //////////////////
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var index = message.replaceAll("and" , "&")
// document.write("<h1>" + index + "</h1>")

////////////////////////////////////////////////////////////////////////
// Rounding numbers
////////////////////////////////////////////////////////////////////////

///////////////// Task 1 //////////////////
// var userInput = prompt("Enter the number with at least 4 decimal points")
// var num = +userInput;
// document.write("<h1>" + "Given Number: " + num + "</h1>")
// document.write("<h1>" + "Rounded Number: " + Math.round(num) + "</h1>")
// document.write("<h1>" + "Ceil Number: " + Math.ceil(num) + "</h1>")
// document.write("<h1>" + "Floor Number: " + Math.floor(num) + "</h1>")

///////////////// Task 2 //////////////////
// var userInput = prompt("Enter the number with at least 4 decimal points")
// var num = +userInput;
// document.write("<h1>" + "Given Number: " + num + "</h1>")
// document.write("<h1>" + "Rounded Number: " + Math.round(num) + "</h1>")
// document.write("<h1>" + "Ceil Number: " + Math.ceil(num) + "</h1>")
// document.write("<h1>" + "Floor Number: " + Math.floor(num) + "</h1>")

////////////////////////////////////////////////////////////////////////
// Generating random numbers
////////////////////////////////////////////////////////////////////////

///////////////// Task 1 //////////////////
// var num = Math.ceil(Math.random() * 6)
// document.write("<h1>" + "Your Dice number is : " + num + "</h1>")

///////////////// Task 2 //////////////////
// var num = Math.ceil(Math.random() * 2)
// if (num === 1) {
//     document.write("<h1>" + "It's a Heads" + "</h1>")
// }
// else {
//     document.write("<h1>" + "It's a Tails" + "</h1>")
// }

///////////////// Task 3 //////////////////
// var num = Math.ceil(Math.random() * 10)
// // console.log(num)
// var userInput = prompt("Enter a number")
// if (+userInput === num) {
//     document.write("<h1>" + "Given Number match" + "</h1>")
// }
// else {
//     document.write("<h1>" + "Better Luck For Next Time" + "</h1>")        
// }

////////////////////////////////////////////////////////////////////////
// Converting strings to integers and decimals
////////////////////////////////////////////////////////////////////////

///////////////// Task 3 //////////////////
// var userInput = prompt("What is your current weight?")      
// document.write("<h1>" + "Your weight is " + userInput + "</h1>")        

////////////////////////////////////////////////////////////////////////
// Converting strings to numbers, numbers to strings
////////////////////////////////////////////////////////////////////////

///////////////// Task //////////////////
// var string = "472"
// var num = 472
// document.write("<h1>" + string + " " + typeof(string) + "</h1>")        
// document.write("<h1>" + num + " " + typeof(num) + "</h1>")        

////////////////////////////////////////////////////////////////////////
// Controlling the length of decimals
////////////////////////////////////////////////////////////////////////

///////////////// Task //////////////////
// var percentage = 30 / 45 * 100;
// var rounded = percentage.toFixed(2)
// document.write("<h1>" + "Your percentage is " + rounded + "</h1>")        



////////////////////////////////////////////////////////////////////////
// DATE METHODS
////////////////////////////////////////////////////////////////////////

///////////////// Task 1 //////////////////
// var date = new Date()
// document.write("<h1>" + date + "</h1>")        

///////////////// Task 2 //////////////////
// const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date()
// var month = date.getMonth()
// document.write("<h1>" + "Current Month is " + monthArr[month] + "</h1>")        

///////////////// Task 3 //////////////////
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date()
// var day = date.getDay()
// document.write("<h1>" + "Today is " + dayNames[day] + "</h1>")        

///////////////// Task 4 //////////////////
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date()
// var day = date.getDay()
// if (dayNames[day] === "Saturday" || dayNames[day] === "Sunday") {
//     document.write("<h1>" + "It's a Fun Day." + "</h1>")        
// }
// else {
//     document.write("<h1>" + "It's not a Fun Day." + "</h1>")        
// }

///////////////// Task 5 //////////////////
// var currentDate = new Date()
// var date = currentDate.getDate()
// if (date < 16) {
//     document.write("<h1>" + "Last days of the month." + "</h1>")        
// }
// else {
//     document.write("<h1>" + "First fifteen days of the month." + "</h1>")        
// }

///////////////// Task 6 //////////////////
// var todayDate = new Date();
// var TodayMill = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = TodayMill - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("<h1>" + "Current Date: " + todayDate + "</h1>");
// document.write("<h1>" + "Elapsed milliseconds since midnight, Jan 1, 1970: " + TodayMill + "</h1>");
// document.write("<h1>" + "Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin + "</h1>")

///////////////// Task 7 //////////////////
// var currentDate = new Date()
// var time = currentDate.getHours()
// if (time > 12) {
//     document.write("<h1>" + "It's PM" + "</h1>")        
// }
// else {
//     document.write("<h1>" + "It's AM" + "</h1>")        
// }

/////////////// Task 8 //////////////////
// var currentDate = new Date()
// currentDate.setDate(31)
// document.write("<h1>" + "Later Date: " + currentDate + "</h1>")  

/////////////// Task 10 //////////////////
// var todayDate = new Date();
// var refDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (PKT)");
// var TodayMill = todayDate.getTime();
// var todayMin = refDate.getTime();
// var diff = TodayMill - todayMin;
// document.write("<h1>" + "On reference date " + refDate + ", " + diff + " seconds had passed since beginning of 2015" + "</h1>");

/////////////// Task 11 //////////////////
// var todayDate = new Date();
// document.write("<h1>" + "Current date " + todayDate + "</h1>");
// var hours = todayDate.getHours()
// var agoHours = hours - 1
// var setAgoHours = todayDate.setHours(agoHours)
// document.write("<h1>" + "1 Hour ago, it was " + todayDate + "</h1>");

/////////////// Task 12 //////////////////
// var todayDate = new Date();
// document.write("<h1>" + "Current date " + todayDate + "</h1>");
// var year = todayDate.getFullYear()
// var agoYear = year - 100
// var setAgoYear = todayDate.setFullYear(agoYear)
// document.write("<h1>" + "1 Hour ago, it was " + todayDate + "</h1>");

/////////////// Task 13 //////////////////
// var userInput = prompt("How old are you?")
// var num = +userInput
// var todayDate = new Date();
// document.write("<h1>" + "Your age is " + num + "</h1>");
// var year = todayDate.getFullYear()
// var agoYear = year - userInput
// document.write("<h1>" + "Your birth year is " + agoYear + "</h1>");

/////////////// Task 14 //////////////////
// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// var custName = "ABC Customer"
// const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date()
// var month = date.getMonth()
// var curMonth = monthArr[month]
// var noUnits = 410
// var chargesUnits = 16
// var netAmount = noUnits * chargesUnits
// var surcharge = 350
// var grossAmount = netAmount + surcharge

// document.write("Customer Name: " + "<b>" + custName + "</b>");
// document.write("<br>");
// document.write("Month: " + "<b>" + curMonth + "</b>");
// document.write("<br>");
// document.write("Number of units: " +  "<b>" + noUnits + "</b>");
// document.write("<br>");
// document.write("charges per unit: " + "<b>" + chargesUnits + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write("Net Amount Payable (Within Due Date): " + "<b>" + netAmount + "</b>");
// document.write("<br>");
// document.write("Late Payment Surcharges: " + "<b>" + surcharge + "</b>");
// document.write("<br>");
// document.write("Gross Amount Payable (Within Due Date): " + "<b>" + grossAmount + "<b>");



///////////////////////////////////////////////////
// FUNCTION
//////////////////////////////////////////////////

/////////////// Task 1 //////////////////
// function currentDate(){
//     var date = new Date()
//     document.write("<h1>" + date + "</h1>");
// }
// currentDate()

/////////////// Task 2 //////////////////
// function fullName(){
//     var fstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
//     document.write("<h1>" + "Assalam-u-Alaikum " + fstName + " " + lastName + "</h1>");
// }
// fullName()

/////////////// Task 3 //////////////////
// function sum(){
//     var num1 = prompt("Enter the a number")
//     var num2 = prompt("Enter the another number")
//     var add = +num1 + +num2
//     alert("Sum of given number " + add)
// }
// sum()

/////////////// Task 4 //////////////////
// function calculator(){
// var string1 = prompt("Enter a number...")
// var num1 = +string1
// var string2 = prompt("Enter another number...")
// var num2 = +string2
// var string3 = prompt("which mathematical operation you like to perform? (+, -, * or /)")
// if (string3 === "+") {
//         var result1 = num1 + num2
//         alert("The Sum of given numbers is " + result1)
// }
// else if (string3 === "-") {
//         var result2 = num1 - num2
//         alert("The Subtraction of given numbers is " + result2)
// }
// else if (string3 === "*") {
//         var result2 = num1 * num2
//         alert("The Multiplication of given numbers is " + result2)
// }
// else if (string3 === "/") {
//         var result4 = num1 / num2
//         alert("The Division of given numbers is " + result4)
// }
// }
// calculator()

/////////////// Task 5 //////////////////
// function square(){
//     var num = prompt("Enter the a number")
//     var square = num * num
//     alert("The square of the given number is " + square)
// }
// square()

/////////////// Task 6 //////////////////
// function factorialize(num) {
//     var result = num;
//     if (num === 0 || num === 1)
//         return 1;
//     while (num > 1) {
//         num--;
//         result *= num;
//     }
//     return result;
// }
// var userInput = prompt("Factorial of which number you want?")
// document.write("<h1>" + "The Factorial of " + userInput + " is " + factorialize(userInput) + "</h1>");

/////////////// Task 7 //////////////////
// function number(FirstNumber, SecondNumber){
//     for (var i = FirstNumber ;i < SecondNumber ; i++){
//         document.write("<h1>" + i + "</h1>");
//     }
// }
// var num1 = prompt("Start Number")
// var num2 = prompt("End Number")
// number(+num1, +num2)

/////////////// Task 8 //////////////////
// function pythagoras(base, perpendicular){
//     var hypo = base + perpendicular
//     var square = hypo * hypo
//     alert("The hypotenuse of given base and perpendicular is " + square)
// }
// var num1 = prompt("Enter Base")
// var num2 = prompt("Enter Perpendicular")
// pythagoras(+num1, +num2)

/////////////// Task 9 //////////////////
// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// alert(value);

/////////////// Task 10 //////////////////
// function uppercase(str) {
//     var array1 = str.split(' ');
//     var newarray1 = [];
//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
// var capitalized = uppercase("the quick brown fox") 
// document.write("EXAMPLE STRINGS: " +"<b>" + "the quick brown fox" + "</b>");
// document.write("<br />");
// document.write("EXAMPLE OUTPUT: " +"<b>" + capitalized + "</b>");

/////////////// Task 11 //////////////////
// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// var longestWord = find_longest_word('Web Development Tutorial')
// document.write("EXAMPLE STRINGS: " +"<b>" + "Web Development Tutorial" + "</b>");
// document.write("<br />");
// document.write("EXAMPLE OUTPUT: " +"<b>" + longestWord + "</b>");

/////////////// Task 12 //////////////////
// function charCount(string, speLetter){
//     var letterCount = 0;
//     for (let position = 0; position < string.length; position++) {
//         if (string.charAt(position) == speLetter) {
//             letterCount += 1;
//         }
//     }
//     return letterCount
// }
// var specialLetter = "JSResourceS.com"
// var givenString = "o"
// var specCount = charCount(specialLetter, givenString);
// document.write("<h1>" + "The number of " + givenString + " in " + specialLetter + " is " + specCount + "</h1>");

/////////////// Task 13 //////////////////
// function calcCircumference(radius1){
//     var pie = 3.14
//     var circum = 2*pie*radius1
//     return circum
// }
// var resultCircum = calcCircumference(17)
// document.write("<h1>" + "The circumference is " + resultCircum + "</h1>");

// function calcArea(radius2){
//     var pie = 3.14
//     var area = pie*radius2*radius2
//     return area
// }
// var resultArea = calcArea(17)
// document.write("<h1>" + "The area is " + resultArea + "</h1>");
