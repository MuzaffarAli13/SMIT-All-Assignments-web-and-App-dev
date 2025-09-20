console.log("JavaScript Exercises: Chapters 11-20");
//   Use the == operator to compare two numeric inputs and demonstrate equality checking.
//  Implement an age verification program using the 
// otherwise, display "Not Eligible"
function Comparison_Operators(){
   let user_1 = Number(prompt("Enter a 1st Number "))
   let user_2 = 18
   if(user_1 == user_2){
       console.log("Eligible");
   }else{
    console.log("Not Eligible");
   }
}

//  Develop a grading system based on user-provided marks:
function  Conditions(){
let marks = parseInt(prompt("Enter your marks:"));
if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else if (marks >= 40) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}



// Score Evaluation
let score = parseInt(prompt("Enter your score:"));

if (score > 90) {
  console.log("Excellent");
} else if (score >= 70 && score <= 90) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
}

function Array(){
// Initialize an array with 5 fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Print first element
console.log("First fruit:", fruits[0]);

// Print last element
console.log("Last fruit:", fruits[fruits.length - 1]);

}

function Array_methods(){
let fruits = ["Apple", "Banana", "Grapes"];
console.log(`Array ${fruits} `);
fruits.push("Mango")
console.log(`New Array add [Mango] ${fruits}`);
fruits.pop()
console.log(`Remove last Item From Array ${fruits}`);
fruits.unshift("Pineapple")
console.log(`Add frist Element in the array '${fruits}'`);
fruits.splice(1,"Papaya")

// Extract element at index 2 (Mango)
let newArray = fruits.slice(2, 3);

console.log("Original Array:", fruits);
console.log("New Array:", newArray);

}

function For_Loops(){
    for(let i = 10;i >=1;i--){
        console.log(5 * i);
    }


   for (let i = 1; i <= 10; i++) {
     if (i === 5) {
       console.log(`Execution stopped at ${i}`);
       break; // Use break to exit the loop
     } else {
       console.log(`current number is ${i}`);
     }
}

}
