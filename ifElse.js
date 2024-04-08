// console.log("If Else file")
// let password = "True";
// if (password == true){
//     console.log("Password is True")
// } else {
//     console.log("Password is NOT True")
// }
// if (1 !="1"){
//     console.log("True")
// } else {
//     console.log("False")
// }
// if (1 ==="1"){
//     console.log("True")
// } else {
//     console.log("False")
// }

// let num = Math.round(Math.random()*10)

// if (num>5){
//     console.log(`The random number generated is ${num} which is greater than 5`)
// } else
// {console.log(`The random number generated is ${num} which is less than 5`)}


// // if (passWord.length >= 8){
// //     console.log("The length of password is acceptable")
// // } else {
// //     console.log("The password should be at least 8 characters")
// // }

// let weather = "rainy"

// if (weather == "sunny"){
//     console.log("Bring suncreen")

// } else if (weather == "rainy") {
//     console.log("Bring an umbrella")

// } else {console.log("Bring a jumper")}

// 

///// Exercise 1

let age = 16, country = "UK"
if(age>17 && country == "UK"){
    console.log("Yes, I can serve you")
} else {
    console.log("You aren't old enough")
}

///// Exercise 3

let password = "apple78"

if (password.length < 8){
    console.log(`Password is too short`)
} else{ console.log(`The password is ${password}`)}

///// Exercise 4

let num = 35

if(num%3 == 0 || num%5 ==0){
    console.log(`${num} is divisible by 3 and/or 5`)
} else{console.log(`${num} is NOT divisible either by 3 or 5`) }


///// Exercise 5
let num1 = 15
if(num1%3 == 0){
    if (num1%5 == 0){
        console.log("fizz buzz")
    } else {console.log("fizz")}
}else if(num1%5 ==0){
    console.log("buzz")
} else {console.log("The number is not divisible by 3 or 5")}

///// Exercise 6
let num2 = 121
let stringForm = num2.toString()
let reverseString = stringForm.split("").reverse().join("")

if(stringForm == reverseString){
    console.log(`The number ${num2} is a palindrome`)
} else{ console.log(`The number ${num2} is NOT a palindrom`)}

///// Exercise 7

let time = 6, placeOfWork="Work", townOfHome="Home"
if(time >= 9 || time < 17){
    console.log(`I am at ${placeOfWork}`)
} else if ((time >= 8 && time < 9) || (time >= 17 && time <=18)){
    console.log("I am commuting")
} else {console.log(`I am at ${townOfHome}`)}


///// Exercise 2

let pizzaTopping = "jalapenos"

switch(pizzaTopping){
    case "pepproni":
        console.log(`I don't mind having ${pizzaTopping} on my pizza`)
        break;
    case "pineapple":
        console.log(`${pizzaTopping} should not be on my pizza`)
        break;
    case "jalapenos":
        console.log(`${pizzaTopping} are important ingredient for my pizza`)
        break;
}

///// Exercise 8

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let revString = string.split("").reverse().join("")
for (let i=0; i<string.length; i++){
    if (revString.charAt(i) == "a" || revString.charAt(i) == "e" || revString.charAt(i) == "i" || revString.charAt(i) == "o" || revString.charAt(i) == "u"){
    console.log(`The position of the last vowel is ${string.length - i}`)
    break;
  }
}

///// Exercise 9
let word = "Elevate"
if(word.charAt(0) == word.charAt(word.length-1) || word.charAt(0) == word.charAt(word.length-1).toUpperCase() || word.charAt(0) == word.charAt(word.length-1).toLowerCase()){
    console.log("True")
} else{console.log("False")}

///// Exercise 10

let number1 = 2, number2 = 7
if((number1+number2)%2 == 0){
    console.log(`The sum of the numbers is ${number1 + number2}, which is even`)
} else{console.log(`The product of the two numbers is ${number1*number2}`)}


let greeting = "Good Morning"

if(greeting == "Good Morning" || greeting == "Good Afternoon"){
    console.log(`${greeting.toUpperCase()}!! Have a great day`)
}else{console.log("See you later")}