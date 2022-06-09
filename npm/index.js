const moment = require("moment");
const lodash = require("lodash");
const { chunk } = require("lodash");
let now = moment();

// print Date and time in this format February 12th 2021, 12:54:12 pm
let currentDate = now.format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);
// Print only date
console.log(now.format("dddd"));
// Print in this format
console.log(now.format("MMM Do YY"));

// Check if the following date is valid or not:

// 2020-01-01
let date = moment("2020-01-01");
console.log(date.isValid());
// 2020-14-01
date = moment("2020-14-01");
console.log(date.isValid());

// Manipulating Dates

// adds 7 days to current date
currentDate = moment("2022-02-25");
currentDate.add(7, "d");
console.log(currentDate.format("ll"));
// adds 7 months to current date
currentDate.add(7, "months");
console.log(currentDate.format("ll"));
// adds 7 years to current date
currentDate.add(7, "years");
console.log(currentDate.format("ll"));
// subtracts 7 days to current date
currentDate.subtract(7, "d");
console.log(currentDate.format("ll"));
// subtracts 7 months to current date
currentDate.subtract(7, "months");
console.log(currentDate.format("ll"));
// subtracts 7 years to current date
currentDate.subtract(7, "years");
console.log(currentDate.format("ll"));

console.log(`The current date after manipulating is  ${currentDate}`);

// to find the difference Between these dates

// 1.

// date1: 2014-11-11
// date2: 2015-09-11

let dateOne = moment("2014-11-11");
let dateTwo = moment("2015-09-11");
console.log(
  `the difference between these two dates is : ${dateTwo.diff(dateOne)}`
);
// 2.

// date1: 2014-11-27
// date2: 2015-09-16
dateOne = moment("2014-11-27");
dateTwo = moment("2015-09-16");
console.log(
  `the difference between these two dates is : ${dateTwo.diff(dateOne)}`
);
// Check is 2020-01-01 date after 2018-01-01
dateOne = moment("2020-01-01");
dateTwo = moment("2018-01-01");

console.log(dateOne.isAfter(dateTwo));
// Check is 2010-01-01 date after 2018-01-01
dateOne = moment("2010-01-01");
dateTwo = moment("2018-01-01");

console.log(dateOne.isAfter(dateTwo));
// Check if the year 2019 is a leap syear
console.log(`2019 is a leap year ${moment("2019").isLeapYear()}`);
// Check if the year 2020 is a leap year
console.log(`2020 is a leap year ${moment("2020").isLeapYear()}`);

// lodash Questions
//chunk method
let arr = ["a", "b", "c", "d", "e", "f"];
console.log(lodash.chunk(arr, 2));

//concat  method
arr = [1];
console.log(lodash.concat(arr, [3], [4], [[4]]));

//difference method
let arr1 = [1, 2, 3, 7, 9];
let arr2 = [1, 2, 3, 4];
console.log(lodash.differenceBy(arr1, arr2));

//union method
console.log(`Union of these two array ${lodash.union(arr1, arr2)}`);

//unique values in the array

console.log(`All the unique values in the array are ${lodash.uniq(arr1)}`);

// Five collection methods
//count by method
console.log(
  `count by collection  method Exmaple ${lodash.countBy(
    [6.1, 4.2, 6.3],
    Math.floor
  )}`
);

//order by method
let users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false },
];
console.log(lodash.orderBy(users, ["user", "age"], ["asc", "desc"]));

//suffle method
console.log(lodash.shuffle(arr1));
//partiton method
console.log(lodash.partition("active", false));
//sort by method

console.log(lodash.sortBy(users, ["user", "age"]));
