const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [m1, d1, m2, d2] = input[0].split(" ");
const weekday = input[1];

const week = { "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6, "Sun": 0 };

const day1 = new Date(`2024-${m1.padStart(2, '0')}-${d1.padStart(2, '0')}`);
const day2 = new Date(`2024-${m2.padStart(2, '0')}-${d2.padStart(2, '0')}`);

const daysDifference = (day2 - day1) / (1000 * 60 * 60 * 24);

const startWeekday = day1.getDay();
const targetWeekday = week[weekday];

// Calculate the first occurrence of the target weekday after or on day1
let daysToAdd = (targetWeekday - startWeekday + 7) % 7;
if (daysToAdd === 0) {
  daysToAdd = 7;
}
const firstOccurrence = new Date(day1);
firstOccurrence.setDate(day1.getDate() + daysToAdd);

// Calculate the difference in days between the first occurrence and day2
const remainingDays = (day2 - firstOccurrence) / (1000 * 60 * 60 * 24);

// Calculate the number of occurrences of the target weekday
const numOfOccurrences = Math.floor(remainingDays / 7) + 1;

console.log(numOfOccurrences);