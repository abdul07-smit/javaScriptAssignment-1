// Question 1: Variable Declarations and Initialization
var productName = "Laptop";
var price = 999.99;
var inStock = true;
console.log(productName, price, inStock);

// Question 2: Mathematical Operations

var x = 27 % 4;
console.log(x);
var y = 12 ** 2;
console.log(y);

var num1 = 8;
num1++;
console.log(num1);

var num2 = 15;
num2 -= 2;
console.log(num2);

// Question 3:  String Concatenation and Case Conversion

var firstName = "alex";
var lastName = "SMITH";
var fullName = firstName + " " + lastName;
fullName = fullName.toLowerCase();
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);
console.log(fullName);
console.log(fullName.length);

// Question 4:if-else Conditional Logic

var temperature = 25;
if (temperature > 30) {
    console.log("Hot day");

} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");

} else {
    console.log("Cold day");

}

// Question 5:  Comparison Operators

console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 != 10 || 5 > 3);

// Question 6: Array Manipulation - Basics

var colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors, colors.length);

// Question 7: Array Manipulation - splice()

var fruits = ["apple", "banana", "cherry", "date", "elderberry"]
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
console.log(fruits);
var fruitsNew = fruits.slice(1, 4);
console.log(fruitsNew);

// Question 8: for Loop - Number Sequence

var sum = 0;

for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;

    }
    if (i === 8) {
        break;

    }

    console.log(i);
    sum += i;


}
console.log("Total sum of printed numbers is", sum);

// Question 9: Nested for Loop - Pattern

for (var i = 0; i < 5; i++) {
    var star = " ";
    for (var j = 0; j <= i; j++) {
        star += " * ";

    }

    console.log(star);

}

// Question 10:  String Methods - Search and Extract

var text = "The quick brown fox jumps over the lazy dog";
console.log("Fox is at index number", text.indexOf("fox"));
var extractedString = text.slice(10, 19);
console.log("Extracted part -", extractedString);
console.log("Dog is found at index number", text.indexOf("dog"));
console.log("The character at positon 10 is -", text.charAt(10));

// Question 11: String Replacement

var sentence = "I love JavaScript and JavaScript is awesome";
var updatedSentence = console.log(sentence.replace("JavaScript", "coding")); // First task
console.log(sentence.replaceAll("JavaScript", "Js")); // Second task
console.log(sentence.replace("awesome", "awesome".toUpperCase())); // third task

// Question 12: Number Rounding and Formatting

var num = 123.456789;
console.log(Number(num.toFixed(2)));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Number(num.toFixed(4)));

// Question 13: Random Number Generation

console.log(Math.ceil(Math.random() * 100));
console.log(Number(Math.random().toFixed(3)));
console.log(Math.floor(Math.random() * 26 + 50));

// Question 14: Type Conversion

console.log(+"123");
console.log(parseFloat("45.67"));
console.log((789).toString());
console.log(typeof ("true" === "true"));

// Question 15: Date and Time Operations

var today = new Date();
// console.log(today); 
var year = today.getFullYear();
console.log(year);
var month = today.getMonth();
console.log(month);
var day = today.getDay();
console.log(day);
var hours = today.getHours(); // 24 hour format by default
console.log(hours);
console.log(year + "-" + (month + 1) + "-" + today.getDate()); // formatted by concatenation 
var specificDate = console.log(new Date(2024, 11, 25)); // specific date

// Question 16 :  Function - Basic Calculator

function calculate(num1, num2, operator) {
    switch (operator) {

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*": ;
            return num1 * num2;

        case "/":
            if (num2 === 0) {
                return "Error: Division by 0";
            } else {
                return num1 / num2;

            }


        default: return "Invalid operation";
    }

}
var test = calculate(3, 9, "+"); // test to see if function works
console.log(test);
var divTest = calculate(4, 0, "/"); // second test to see division by 0
console.log(divTest);

// Question 17: Local vs Global Variables

var globalCounter = 0;

function incrementCounter() {
    globalCounter++;
    var globalCounter = 0;
    globalCounter++;
    console.log(globalCounter);

}

incrementCounter();
incrementCounter();
console.log(globalCounter);

// Question 18 : switch Statement - Day of Week

var dayNumber = 7;
switch (dayNumber) {
    case 0:
        console.log("Day is Sunday");
        break;

    case 1:
        console.log("Day is Monday");
        break;

    case 2:
        console.log("Day is Tuesday");
        break;

    case 3:
        console.log(" Day is Wednesday");
        break;

    case 4:
        console.log("Day is thursday");
        break;

    case 5:
        console.log("Day is friday"); y
        break;

    case 6:
        console.log("Day is saturday");
        break;

    default:
        console.log("Invalid number");
}

// Question 19: while Loop - Countdown

var i = 10;
while (i >= 1) {
    console.log(i);
    i--;;
}
console.log("Blast off!");

// Factorial of 5!
var num = 5;
var factorial = 1;

while (num > 0) {
    factorial = factorial * num;
    num--;
}

console.log(factorial);

// Question 20: do...while Loop - User Input Simulation,

var correctPasssword = "secret123";
var enteredPassword = "";
var attempts = 0;

do {
    attempts++;
    console.log("Attempt", attempts);
} while (enteredPassword !== correctPasssword && attempts < 5);
console.log(attempts, enteredPassword); // testing logic
console.log(correctPasssword); // testing logic

// Question 21 : Array Methods with for Loop

var numbers = [12, 45, 78, 23, 56, 89, 34];
var maxValue = numbers[0]; // part1
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }

} console.log("Max value found is -", maxValue);

var average = 0;
for (var i = 0; i < numbers.length; i++) {
    average += numbers[i];
}
average = average / numbers.length;
console.log(Number(average.toFixed(2))); // fixed decimals to 2 points while converting back to number just because its more neat

// part 3 
var numbersAbove50 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        numbersAbove50.push(numbers[i]);
    }
}
console.log(numbersAbove50);

// part 4

var arrayReversed = [];

for (var i = 0; i < numbers.length; i++) {
    arrayReversed.unshift(numbers[i]);
}
console.log(arrayReversed);

// Question 22 : Event Handling Simulation

function handleClick() {
    var userName = document.getElementById("username");
    var greeting = document.getElementById("greeting");

    if (userName.value === "") {
        alert("Username is empty");
    } else {
        greeting.textContent = "Welcome, " + userName.value + "!";
        userName.value = " ";
    }

}

// Question 23 : Form Validation Function
function validateForm(email, password) {
    if (email.indexOf("@") !== -1 && password.length >= 8) {
        return true;
    } else if (email.indexOf("@") == -1 && password.length < 8) {
        console.log("Error - Email and password are invalid!");
        return false;
    }
    else if (email.indexOf("@") === -1) {
        console.log("Error- Email must contain the @ symbol");
        return false;
    }
    else {
        console.log("Error- Password must be 8 or more characters!");
    }

}
console.log(validateForm("1234@example.com", "12345678")); // both valid
console.log(validateForm("1234example.com", "1234567")); // both invalid
console.log(validateForm("1234@example.com", "123456")); // password invalid
console.log(validateForm("1234example.com", "12345678")); // email invalid


// Question 24: Temperature Converter

function convertTemp(temp, unit) {
    if (unit === "C") {
        return Number(((temp * 9 / 5) + 32).toFixed(1));
    } else if (unit === "F") {
        return Number(((temp - 32) * 5 / 9).toFixed(1));
    } else {
        console.log("Error- Invalid unit. Use'C' or 'F'.");
        return false;

    }
}

console.log(convertTemp(1, "C"));
console.log(convertTemp(100, "C"));
console.log(convertTemp(30, "F"));
console.log(convertTemp(222, "F"));
console.log(convertTemp(55, "X"));

// Question 25: Shopping Cart Array Operations

var cart = [];

function addItem(name, price) {
    var item = { name: name, price: price };

    cart.push(item);


}

function removeItem(name) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }

}

function calculateTotal() {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }
    return total;
}

function applyDiscount(percentage) {
    var total = calculateTotal();
    var discount = total * (percentage / 100);
    var finalTotal = total - discount;

    return finalTotal;
}

function listItems() {
    var itemNames = [];

    for (var i = 0; i < cart.length; i++) {
        itemNames.push(cart[i].name);
    }
    return itemNames;
}

addItem("Chicken", 20.99);
addItem("Butter", 5.75);
addItem('Ball', 12.6);
addItem("Phone", 699);

console.log(listItems()); // testing cart after adding items
console.log(calculateTotal()); // calculating total of all added items from cart
console.log(applyDiscount(15)); // applying a 15% dicount to total

removeItem("Ball");  // testing remove item function 

console.log(listItems()); // checking the list items after removing an item
console.log(calculateTotal()); // calculating the total after item has been removed




















































