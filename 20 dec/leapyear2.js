// Input year and find it is leap year or not
// var a=2022

//     if ((0 == a % 4) && (0 != a % 100) || (0 == a % 400)) {
//         console.log(a + ' is a leap year');
//     } else {
//         console.log(a + ' is not a leap year');
//     }
//     var opt=prompt("Enter a year");


//     if(a%4==0) && (a%100!=0)||(a%400==0);
//     {
//         console.log("leap year",a);
//     }
//     else{
//         console.log("not a leap year",a);
//     }
// }

// function leapyear(year)
//  {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//  }
//  console.log(leapyear(2016)); // Expected output: true
// console.log(leapyear(2000)); // Expected output: true
// console.log(leapyear(1700)); // Expected output: false
// console.log(leapyear(1800)); // Expected output: false
// console.log(leapyear(100)); 

// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

function isLeapYear(year) {
    if (
        (year%4 ===0 && year%100 !==0 )||(year%400 ===0)
    )
        console.log(" Input year:", year, "is a Leap Year");
    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}
 
// let inputYear = 2020;
// isLeapYear(inputYear);
// inputYear = 2023;
// isLeapYear(inputYear);
