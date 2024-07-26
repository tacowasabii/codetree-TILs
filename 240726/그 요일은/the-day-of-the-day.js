const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [m1, d1, m2, d2] = input[0].split(" ")
const weekday = input[1]

const week = { "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6, "Sun": 7}

const day1 = new Date(`2024-${m1}-${d1}`)
const day2 = new Date(`2024-${m2}-${d2}`)

const days = (day2 - day1) / (1000 * 60 * 60 * 24)

console.log(parseInt((days - week[weekday] + 1) / 7) + 1)