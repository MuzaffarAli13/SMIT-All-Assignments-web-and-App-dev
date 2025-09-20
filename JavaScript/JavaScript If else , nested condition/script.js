// Example 1: Day-Based Meal Suggestion

// Write a program that suggests a meal based on the day of the week. If the user inputs the name of the day, it should display a corresponding meal suggestion:

// Monday: "Today is Biryani!"
// Tuesday: "Today is Nihari!"
// Wednesday: "Today is Fried Chicken!"
// Thursday: "Today is Pizza!"
// Friday: "Today is Burgers!"
// Saturday: "Today is Pasta!"
// Sunday: "Today is Steak!"


function Example_1(user_input){
    user_input.toLowerCase()
if (user_input == "monday") {
     console.log("Today is Biryani!");
}
else if(user_input == "tuesday"){
    console.log("Today is Nihari!");
}
else if(user_input == "wednesday"){
    console.log("Today is Fried Chicken!");
}
else if(user_input == "thursday"){
    console.log("Today is Pizza!");
}
else if(user_input == "friday"){
    console.log("Today is Burgers!");
}
else if(user_input == "saturday"){
    console.log("Today is Pasta!");
}
else if(user_input == "sunday"){
    console.log("Today is Steak!");
}
else{
    console.log("enter correct name");
}
}

Example_1("sunday")  // call 


// Example 2: Weekend vs Weekday Reminder
// Problem:

// Create a program that reminds the user whether it's a weekend or a weekday:

// If it’s Saturday or Sunday, remind them to relax.
// If it’s a weekday, remind them to work hard.

function Example_2(user_input){
     user_input.toLowerCase()
     if(user_input === "saturday" || user_input === "sanday"){
        console.log("It's the weekend! Time to relax.");
     }
     else if(
        user_input === "monday" ||
        user_input === "tuesday" || 
        user_input === "wednesday" || 
        user_input === "thursday" ||
        user_input === "friday"
     ){
        console.log("It's a weekday! Work hard and stay focused ");
     }
     else{
        console.log("Invalid input. Please enter a correct day name.");
     }
}
Example_2("monday") // call



// Example 3: Age-Based Discount Calculation

// Create a program to offer a discount based on the age of a person and day of the week.

// If the person is under 18 and it's Friday or Saturday, give them a 15% discount.
// If the person is 18 or older and it's Monday to Thursday, give them a 10% discount.
// If the person is 50 or older and it's Sunday, give them a 20% discount.

// Age-Based Discount Calculator

function Example_3(age,day){

day = day.toLowerCase();
if (age < 18 && (day === "friday" || day === "saturday")) {
    console.log("You get a 15% discount!");
}
else if (age >= 18 && age < 50 && 
         (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday")) {
    console.log("You get a 10% discount!");
}
else if (age >= 50 && day === "sunday") {
    console.log("You get a 20% discount!");
}
else {
    console.log("No discount available.");
}
}

Example_3(19,"monday") // call

// Complete
