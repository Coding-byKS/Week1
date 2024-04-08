/* 1. Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’.
 console.log the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”).*/

let breakfast, lunch, dinner
breakfast = "scrambled eggs"
lunch = "chicken salad"
dinner = "soup and grilled cheese"
console.log(`Meals I had today:- Breakfast:${breakfast}, Lunch:${lunch} and Dinner:${dinner}.`)

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/* 2. Pass in a parameter called num. If num is a data type of string or num is less than or 
equal to 0, return the string 'needs to be a positive number’. If num is divisible by 3 return “fizz”,
if num is divisible by 5 return “buzz”, if num is divisible by both 3 and 5 return “fizz buzz”. 
If num is not divisible by 3 or 5 return the value of num. Print the result*/

const fizzBuzz = (num) =>{
    if(typeof(num) == "string" || num<=0){
    return "Input needs to be a positive number"
    }else if(num%3 == 0 && num%5 == 0){
         return "fizz buzz"
        }else if(num%3 == 0){return "fizz"
             }else if(num%5 ==0){return "buzz"
                  } else {return`The number ${num} is not divisible by 3 or 5`}
}
console.log(fizzBuzz(-15))
console.log(fizzBuzz("apple"))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(21))

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/*Pass in 2 parameters called num1 and num2. Create an if statement that checks if the result
of the sum is even, if it is return the number, otherwise return the numbers multiplied together. 
If the parameters are not numbers return the error message 'make sure you enter 2 numbers'.*/

const numFunction = (num1,num2) => {
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "Make sure you enter 2 numbers."

    }else if((num1+num2)%2 == 0){
        return `The sum of the the numbers ${num1} and ${num2} is ${num1+num2} which is even.`
    }else{return `The sum of the the numbers ${num1} and ${num2} is NOT even. Here is the product of the two numbers ${num1*num2}.`}
}
console.log(numFunction(2,4))
console.log(numFunction(8,9))
console.log(numFunction("apple",4))
console.log(numFunction(2,true))

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/*Generate 6 random numbers between 1-50, add them to an array and log the array.*/

let numArray = []
for(let i=0;i<6;i++){
    numArray.push(Math.ceil(Math.random()*50))
}

console.log("6 random numbers betweem 1 to 50")
console.log(numArray)

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/*If we can create a loop to put 0-9 on the screen, how can we count from 9-0? 
Return an array that contains 9-0 using a loop that does this. Print the result*/

let array9_0 = []
for(let i=9; i>=0;i--){
    array9_0.push(i)
}
console.log("Array containing numbers from 9-0")
console.log(array9_0)

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/*Create a JavaScript program that prints out a multiplication table for a given number.
The program should take a number(can store in a variable), representing the multiplication 
table they want to generate. Use a for loop to iterate from 1 to 10.
Inside the loop, multiply the current number by the stored number and
print out the result in the format: <input number> * <current number> = <result>.*/

let inputNum
const multiplicationTable = (inputNum) =>{
    for(let i=1;i<11;i++){    
    console.log(`input number ${inputNum} X current number ${i} = ${i*inputNum}`)
}
}
multiplicationTable(5)

console.log("________________________________________________________________________________________________________")//to separate exercises in the terminal
console.log("________________________________________________________________________________________________________")
console.log("                                                                                                        ")

/*Create a JavaScript program that calculates the average grade of a student based on their scores
in three subjects: Math, Science, and English. Define a function named calculateAverage that takes
three parameters: mathScore, scienceScore, and englishScore.
Inside the function, calculate the average score by adding up the scores of the three subjects 
and dividing by 3. Return the average score from the function.
Call the calculateAverage with the separate score results as arguments and log the result to 
the console.Modify the program to also determine and display the corresponding letter grade based 
on the average score. For example, A for scores >= 90, B for scores >= 80, and so on.*/

const calculateAverage = (mathScore, scienceScore, englishScore) =>{
    return (mathScore+scienceScore+englishScore)/3
}
const grade = (mathScore, scienceScore, englishScore) => {
    if(calculateAverage(mathScore, scienceScore, englishScore)>=90){
        return `Your average score for Maths, Science and English is 
        ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is A`
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=80){
        return `Your average score for Maths, Science and English is 
        ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is B`
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=70){
        return `Your average score for Maths, Science and English is 
        ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is C`
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=60){
        return `Your average score for Maths, Science and English is 
        ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is D`
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=50){
        return `Your average score for Maths, Science and English is 
        ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is E`
    }else{return `Your average score for Maths, Science and English is 
    ${calculateAverage(mathScore, scienceScore, englishScore)} and your grade is F`}
}
console.log(grade(90,90,90))
console.log(grade(55,57,53))
console.log(grade(35,40,36))

