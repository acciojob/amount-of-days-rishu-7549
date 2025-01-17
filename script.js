//your JS code here. If required.
//your JS code here. If required.
function daysOfAYear(aYear) {
	let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	return isLeapYear ? 366 : 365;
}
let year = prompt("Enter the days of a year");
alert(daysOfAYear(year));

