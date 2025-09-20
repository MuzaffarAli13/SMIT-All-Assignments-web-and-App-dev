console.log("avaScript Assignment chap 21 - 30");
// Strings: Measuring Length and Extracting Part
let str = "Hello World";
console.log(str.length);


let sentence = "The cat is sleeping";

if(sentence.includes("cat")){
    console.log(true);
}else{
    console.log(false);
}



let sentence2 = "The cat is sleeping";
let index = sentence2.indexOf("sleep")
console.log(index);

// console.log("Strings: Finding a Character at a Location");

let text = "JavaScript";
console.log(text.charAt(3));


let text_2 = "Programming";
console.log(text_2.charAt(text_2.length-1));


// console.log("Rounding Numbers");

let num = 7.8;
console.log(num.toFixed());


let num_2 = 5.9;
console.log(Math.floor(num_2));

let num_3 = 4.2;
console.log(Math.ceil(num_3));


// Generating Random Numbers
let randm = Math.floor(Math.random()*10+1)
console.log(randm);


// Generating Random Numbers
let rand = Math.floor(Math.random()+2)
console.log(randm);

let num_4 = "123.8";
console.log(Number(num_4));
console.log(parseInt(num_4));
console.log(parseFloat(num_4));


let strNum = "100";
console.log(parseInt(strNum));

let strFloat = "3.141";
console.log(parseFloat(strFloat));


// Converting Strings to Numbers and Numbers to Strings

let num_5 = 250;
console.log(String(num_5));

let num_6 = "45.67";
console.log(Number(num_6));

let num_7 = 5.6789;
console.log(num_7.toFixed(2));


let num_8 = 3.1415926535;
console.log(num_8.toFixed(4));
