let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if(coffeeIsGrinding){
        console.log("Stopping the grinding");
        coffeeIsGrinding = false;
        
}else{
    console.log("Grinding is about to begin");
    coffeeIsGrinding=true;
}
}
pressGrindBeans();
pressGrindBeans();

let accNumber = 50779087
const cashWithdrawal = (amount, accnum) =>{
    console.log(`Withdrawing ${amount} from account ${accnum}`)
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(250, accNumber);

const addUp = (num1, num2) => {
    return num1 + num2
}
let result = addUp(2,3)
console.log(addUp(3,5))
console.log(addUp(9,5))
console.log(result)

const multiplyByNineFifths = (celsius) =>{
       return celsius*(9/5)
}

const getFahrenhiet = (celsius) =>{
    return multiplyByNineFifths(celsius) + 32
}

console.log(`The temperature is ${getFahrenhiet(15)} F`)

const substract32 = (fahren) =>{
    return fahren - 32
}
const getCelcius = (fahren) =>{
 return Math.round(substract32(fahren)*(5/9))
}
console.log(`The temperature is ${getCelcius(100)} C`)

const calculateAverage = (mathScore, scienceScore, englishScore) =>{
    return (mathScore+scienceScore+englishScore)/3
}

const grade = (mathScore, scienceScore, englishScore) => {

    if(calculateAverage(mathScore, scienceScore, englishScore)>=90){
        return "A"
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=80){
        return "B"
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=70){
        return "C"
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=60){
        return "D"
    }else if (calculateAverage(mathScore, scienceScore, englishScore)>=50){
        return "E"
    }else{return "F"}
}
console.log(`Your average score for Maths, Science and English is ${calculateAverage(80,90,85)} and your grade is ${grade(80,90,85)}`)

const isPalindrome = (str) =>{
    newStr = (str.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    if(newStr === newStr.split().reverse().join()){
        return true
    }else{false}
}
if(isPalindrome("app0>>le"+"elp$[[[pa")){
    console.log("You entered a palindrome!!!")
}else{console.log("The string you entered is not a palindrome")}

