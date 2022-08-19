function  checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year')
    } else {
        console.log(year + ' is not a leap year')
    }
}
var year_1 = 2012
var year_2 = 2018
checkLeapYear(year_1)
checkLeapYear(year_2)