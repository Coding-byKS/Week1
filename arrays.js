
// console.log("Hello")
// let coffeeOrder = ["Tom - americano", "Sam - latte"] 
// console.log(coffeeOrder.length)
// let animal = ["cat", "dog", "fish", "zebra"]
// console.log(animal[1])
// animal[1] = "tiger"
// console.log(animal[1])
// animal[4] = "elephant" //adds 1 more to the array
// console.log(animal)
// animal.push("bear")
// console.log(animal)


let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
numArray.push(12) // adds 12 to the array after the last element
console.log(numArray)
numArray.pop() // removes last element of the array
console.log(numArray)
numArray.unshift(0) //add 0 to the begging of the array
console.log(numArray)
numArray.shift() // removes first element of the array
console.log(numArray)

let names = ["Sam", "Mary", "John", "Sarah", "Anna"]
names.forEach((element) => {console.log(element);}); // logs elements one at a time

let capNames = []
names.map((element) => {capNames.push(element.toUpperCase())}) 
// converts elemenst to upper case from one array adds to another
console.log(capNames)

let namesWithA = []
namesWithA = names.filter((element) => (element[0] == "a" || element[0] == "A"))
// checks if the first letter of each string element is A or a and adds to new array if true
console.log(namesWithA)


console.log(`Is 15 part of the numbers array: ${numArray.includes(15)}`)
// checks if 15 is part of numArray

console.log(`Index of 8 is ${numArray.indexOf(8)}`)
// logs index of a particular element

console.log(` the sorted array of names: [ ${names.sort()} ]`) // sorts the array
console.log(` the reversed array of names: [ ${names.reverse()} ]`) // reverses the array

let initialValue = 0  // can directly use 0 in the syntax below as well
let sumWithInitial = numArray.reduce((acc, cV) => acc + cV, initialValue) 
// based on what operator is used above, that specific operation is done to the elements 
console.log(sumWithInitial);

let newNameList = []
newNameList = names.slice(0,3) // creates new array with elements starting from 0 and before 3
console.log(newNameList) 

names.splice(0, 3, "Taylor") //removes 3 elements and adds Taylor at position 0
console.log(names) //logs new array after the splice

console.log(newNameList.concat(names)) // logs an array listing elements from both the arrays

