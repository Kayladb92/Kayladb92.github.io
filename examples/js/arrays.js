let emptyArray = [];

let numberArray = [27, 7, 2, 2929, 45];

let stringArray = ["apple", "orange", "grapes", "pear"];

let mixedArray = ["cat", 2, 5, "dog", "platypus", 12, [2, 3]];

let groceryList = [
    "bacon",
    "eggs",
    "coffee",
    "cheese",
    "fruits and veggies",
    "Pastromi"
];
console.log(groceryList);

let firstGroceryItem = groceryList[1];
console.log(firstGroceryItem);

let thirdGroceryItem = groceryList[2];
console.log(thirdGroceryItem);

let lastGroceryItem = groceryList[5];
console.log(lastGroceryItem);

console.log(groceryList);
groceryList.push("ice cream");
console.log(groceryList);

const pageList = document.getElementById("pageList");
const itemInput = document.getElementById("itemInput");
const itemSubmit = document.getElementById("itemSubmit");

function displayList() {
    pageList.innerHTML = grocerylist
        .toString()
        .replaceAll(",", "<br>");

}
displayList();

itemSubmit.addEventListener("click", function (e) {
    let newItem = itemInput.value;
    groceryList.push(newItem);
    displayList();

});