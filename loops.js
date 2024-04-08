console.log("loops")
let drinks =["beer", "cider","coffee"]
drinks.forEach((i) => console.log(i))

for (let j = 0; j < drinks.length; j++ ){
    console.log(drinks[j])
}

// for (let j = 0; j < drinks.length; j--){
//     console.log([j])
// }
// let multiplesOfTwo = []
// for(let i=0; i<20; i++){
//     if(i%2 == 0 && i%3 == 0){
//         multiplesOfTwo.push(i)
//     }
// }
// console.log(multiplesOfTwo)
// let age = 15
// while(age<18){
//     console.log(`You are a child at ${age} years old`)
//     age++
// }
// console.log("You are an adult")

// let card = ["diamond", "spade", "heart", "club"]
// let currentCard = "club"

// while(currentCard != "spade"){
//     console.log(currentCard)
//     currentCard = card[Math.floor(Math.random()*4)] 
//     //Math.floor ensures it rounds down to nearest integer. It allows 0 and disallows 5
// }
// console.log(currentCard)

let favFilm = ["Pulp Fiction", "Godfather", "Shawshank Redemption", "Iron Man", "Incredible Hulk"]

favFilm.splice(5, 0, "Deadpool", "Deadpool 2")

console.log(favFilm)
for( let i=0; i<favFilm.length; i++){
    console.log(favFilm[i])
}

for(let i=0; i<6; i++){
    console.log(Math.ceil(Math.random()*50))
}

// for(let i=0; i<10;i++){
//     console.log(i)
// }
for(let i=9; i>=0;i--){
    console.log(i)
}

let film = ["Pulp Fiction", "Godfather", "Shawshank Redemption", "Incredible Hulk"]
console.log(film)

for(let i=0; i<film.length; i++){
    console.log(film[i])
    if(i==2){
        if(film[i] == "Ghostbusters"){
            console.log("Yay it's Ghostbusters")
        }else{console.log("Boo! We want Ghostbusters")}
    }
}

for(let i=0; i<6;i++){
    let num = Math.ceil(Math.random()*30)
    if(num%7==0){
        console.log(`The number generated is ${num}, which is divisible by 7.`)
    }else{console.log(`The number generated is ${num}, which is NOT divisible by 7.`)}
}

let bobsFollowers = ["Tim", "Rob", "Lara", "Mary"]
let hannahsFollowers = ["Tim", "Tanya", "Lara", "Harry"]
let commonFollowers = []

for(let i=0; i<bobsFollowers.length; i++){
    for(let j=0; j<hannahsFollowers.length; j++){
        if(bobsFollowers[i] == hannahsFollowers[j]){
            commonFollowers.push(bobsFollowers[i])
        }
    }
}
console.log(`Bob's and Hannah's common followers are:`)
commonFollowers.forEach((i)=>{console.log(i)})

let inputNum = 3
for(let i=1;i<11;i++){    
    console.log(`current number ${i} X input number ${inputNum} = ${i*inputNum}`)
}