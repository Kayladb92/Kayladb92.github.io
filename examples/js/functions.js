// variable review
let greeting = "Good evening";
console.log(greeting);

// Simple Function
function greet() {
   console.log(greeting);
}

greet();

//Function with an input parameter
function greetUser(username) {
    let userGreeting = greeting + username;
    console.log(userGreeting);
}

greetUser("Kayla")
greetUser("Kayla")
greetUser("Kayla")

// Function with input parameter
// that modifies the page
function greetUserOnPage(username) {
     let greetingDisplay = document.getElementById("greetingDisplay");
    greetingDisplay.innerHTML = greeting + "," + username;
}

greetUserOnPage("KayKay");