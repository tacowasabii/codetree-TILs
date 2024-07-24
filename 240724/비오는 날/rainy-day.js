const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const n = Number(input[0])

let arr = []
for (let i = 1; i <= n; i++){
    const [dateStr, weekDay, weather]= input[i].split(" ")
    if (weather == "Rain"){
        const date = new Date(dateStr)
        arr.push({date, dateStr, weekDay, weather})
    }
}
let earliestRainyDay = arr[0]
for (let i = 1; i < arr.length; i++){
    if (earliestRainyDay.date > arr[i].date){
        earliestRainyDay = arr[i]
    }
}

console.log(earliestRainyDay.dateStr, earliestRainyDay.weekDay, earliestRainyDay.weather)