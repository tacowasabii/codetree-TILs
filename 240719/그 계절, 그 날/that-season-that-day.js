function isYunNeyon(year){
    if (year % 4 === 0){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return true
            }
            return false
        }
        return true
    }
    return false
}

function daysOfMonth(month, isYunNeyon){
    more = [1, 3, 5, 7, 8, 10, 12]
    if (month === 2){
        if (isYunNeyon){
            return 29
        }
        return 28
    } else if (more.includes(month)) {
        return 31
    } else {
        return 30
    }
}

function season(month){
    if (3 <= month && month <= 5){
        return "Spring"
    } else if (6 <= month && month <= 8){
        return "Summer"
    } else if (9 <= month && month <= 11){
        return "Fall"
    } else {
        return "Winter"
    }
}

const fs = require("fs")
const [y, m, d] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

if (d <= daysOfMonth(m, isYunNeyon(y))){
    console.log(season(m))
} else {
    console.log(-1)
}