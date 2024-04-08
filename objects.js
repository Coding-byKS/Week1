const person = {
  name: "Khushboo",
  age: 300,
  greeting() {
    return `Hello!, my name is ${this.name}`;
  },
};
console.log(person.name);
console.log(person["age"]);
person.favoriteSongs = ["Twinkle Twinkle", "Baba Black Sheep"];
console.log(person.greeting());

let alarmClock = {
  weekdayAlarm: "get up at 7 am",
  weekendAlarm: "No alarm needed",
};

let string ="apple"
console.log(string.split("").reverse().join(""))

let day = "sunday",
  alarm;
if (day.toLowerCase === "sunday" || day.toLowerCase === "saturday") {
  alarm = alarmClock.weekendAlarm;
} else {
  alarm = alarmClock.weekdayAlarm;
}

console.log(alarm);
