//  1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

(
    function (array) {
            [array[0], array[array.length-1]] = [array[array.length - 1], array[0]];
            console.log (array)
    }
) ([4, 5, 11, 9]);


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(
    function () {
        let a = 4;
        let b = 5;
        let multiplication = a*b
        console.log (multiplication)
    }

) ();

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(
    function (string) {
        let sum= ""
        let counter = 0;
        for (i=0; i < string.length; i++) {
            if (string[i] == "m" || string[i] == "M") {
                sum  += "*";
                counter ++;
                continue;
            }
            sum += string[i];
        }
        console.log (sum)
    }

) ("prograMming");

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com;


function emailAdress (name, surname) {
        let result= name + "." + surname + "@gmail.com";
        
        console.log (result)
    }

 emailAdress("aldina", "sehovic");


// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28

var octalNumber = 034;

var firstFunction = function () {
  return function (num) {
    return parseInt(num);
  }
};

var secondFunction = firstFunction();

console.log(secondFunction(octalNumber));


// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

// Input: JSGuru123
// Output: Your password is cool!

function successCallback () {
    return 'Your password is cool!'  
}

function errorCallback () {
    return 'Your password is invalid!!'
}

function checkPassword (password, a, b) {
var count = 0;
for (var i = 0; i < password.length; i++){
    if (parseInt(password[i]) >= 0 ) {
        count ++;
    }
}
    if (password.length >= 6 && count >= 1) {
        return a();
    } else {
        return b();
    }    
}

console.log(checkPassword('JSGuru123', successCallback, errorCallback));
console.log(checkPassword('JSGuru', successCallback, errorCallback));

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]  

var array = [2, 8, 11, 4, 9, 3]

var callback = function (x) {
    return x % 2 !== 0;
}

var filterOddNumbers = function (a, b) {
    return a.filter(b);
}

console.log(filterOddNumbers(array, callback));