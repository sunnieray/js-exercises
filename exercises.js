// 1 create an alert that says "hello world"
alert("Hello! I am an alert box!!");
// 2 create a prompt which asks for your favorite number
var favNumber = prompt("What's your favorite number?");

// 2a display the response in the console with "user's favorite nunber is: (display input)"
if (favNumber != null) {
    console.log(`${favNumber} is your favorite number`);
  }

// 3 create a variable which selects the h1
    // 3a add inner text to the header selector
    var grabHeader = document.querySelector("h1");
    grabHeader.innerHTML = "This is my Header"
    // 3b add a border around the h1 that is 1px, solid, and black. use "cssText" to add this
    grabHeader.style.cssText = "border: 1px solid black";

// 4 console.log a variable tht holds an array of the alphabet
function remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);}

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphabet.toString();
remove(alphabet, "a")
remove(alphabet, "e")
remove(alphabet, "i")
remove(alphabet, "o")
remove(alphabet, "u")
remove(alphabet, "y")
alphabet.toString();
console.log(alphabet)

// 4a use "slice" to remove the vowels, including "y"

// 4b console.log the remaining array of consonants, label the console log with a string
// 4c  console.log the length of this array, label it with a string
console.log(`${alphabet.length} is the length og this array`)

//???????// 5 create a variable of an array of numbers 1-5
let numbers = [1, 2, 3, 4, 5]
    // 5a create a "const" which uses "map" to multiply each number with itself
const multiply = numbers.map()
    // 5b console.log the results of the mapped array, label the console log with string
    // 5c use the "forEach" method on the mapped array to console log the remainder when divided by 2

// 6 create an variable holding an object of each person with the properties "name, age, jobTitle, laptopType, isStudent" the data can/is fictional
var person = [
   {name: Sunnie,
    age: 22,
    job: Lyft,
    laptop: MacBook,
    isStudent: true},
    {name: zack,
    age: 27,
    job: Lead,
    laptop: MacBook,
    isStudent: false},
    {name: Sunnie,
    age: 25,
    job: microsoft,
    laptop: windows,
    isStudent: true}
]
    // 6a create a for loop to dynamically create a sentence describing each "person"
for person 
    // 6b inject these sentences in "p" elements in the html div

// 7 create two "const" variables of strings. console log the combined result using "concat"

// 8 create an array of strings made up of words of a quote or nursery rhyme.
    // 8a use the "filter" method on the array variable to gather the words with length greater than 3
    // 8b console log those words
    // 8c use "join" to create a sentence outputted in a console log

// 9 create an array of 10 javascript concepts
    // 9a using a "do ... while" loop, console.log each concept with a labeling string
    // example output for one loop: "we have learned about ____ in javascript" (i.e. variables)

// 10 create a function that injects a clickable div on the document
    // 10a when clicking on the button, a message appears next to the div
    