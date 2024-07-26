const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [m1, d1, m2, d2] = input[0].split(" ");
const weekday = input[1];

const week = { "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5, "Sat": 6, "Sun": 0 };

const day1 = new Date(`2024-${m1.padStart(2, '0')}-${d1.padStart(2, '0')}`);
const day2 = new Date(`2024-${m2.padStart(2, '0')}-${d2.padStart(2, '0')}`);

const daysDifference = Math.floor((day2 - day1) / (1000 * 60 * 60 * 24));

const startWeekday = day1.getDay();
const targetWeekday = week[weekday];
const daysToFirstOccurrence = (targetWeekday - startWeekday + 7) % 7;

// 첫 번째 목표 요일 이후 남은 날 수 계산
const remainingDays = daysDifference - daysToFirstOccurrence;

// 주간 반복 횟수 계산
const numOfOccurrences = Math.floor(remainingDays / 7) + 1;

console.log(numOfOccurrences);