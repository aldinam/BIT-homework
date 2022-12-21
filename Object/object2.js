// 1. Create a function that takes an array of objects (groceries) which 
// calculates the total price and returns it as a number. A grocery object 
// has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
function totalPrice(groceries) {
    //KOMENTAR: Zbog cega imas ovde objekte milk, eggs i bread? :) 
    var milk ={
    product: "Milk",
    quantity: 1, 
    price: 150
    }
    var eggs={
        product: "Eggs",
        quantity: 10,
        price: 20
    };
    var bread={
        product: "Bread",
        quantity: 2,
        price: 80
    }
   
            var sum = 0;
            for (var i = 0; i < groceries.length; i++) {
            sum += groceries[i].quantity * groceries[i].price;
            }
            return `The total price of groceries is: ${sum}`;
     }
    var groceriesPrice= totalPrice ([{
        product: "Milk",
        quantity: 1, 
        price: 150
        },
        {product: "Eggs",
        quantity: 10,
        price: 20
        },
        {
        product: "Bread",
        quantity: 2,
        price: 80
        }])
    console.log (groceriesPrice);

// 2. You go to a jewelry shop and try to find the most expensive piece of  
// jewelry. You write down the name of each piece of jewelry and its 
// price. Create a function that gets the name of the piece of jewelry with 
// the highest price and returns "The most expensive one is the {name of
// jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold 
// watch’, price:250}, ...])
// - The most expensive one is the diamond Ring.


function mostExpensive(jewelry){

    var jewelry = {

    diamondEarings: {
    name: "Diamond earings", 
    price: 980},
    goldenWatch: {
    name: "Gold watch", 
    price: 250,},
    diamondRing: {
    name: "Diamond ring", 
    price: 100000},

    printMostExpensive: function () {

        
       // KOMENTAR: Ovo nije dobra praksa. Sta da imamo 150 vrednosti za poredjenje?  
    var max= Math.max(jewelry.diamondEarings.price,jewelry.goldenWatch.price,jewelry.diamondRing.price)

    if (max==980){
        return jewelry.diamondEarings
    } else if(max==250){
        return jewelry.goldenWatch
    } else {
        return jewelry.diamondRing
    }
}
    }
return jewelry;
}
var expensiveJewelry= mostExpensive ([{name:"Diamond earings", 
price: 980 },{name: "Gold watch", price: 250}, {name: "Diamond ring", price: 100000}])

console.log(expensiveJewelry.printMostExpensive());
  
 
// 3. Given a word, create an object that stores the indexes of each letter in 
// an array. Make sure the letters are the keys. Make sure the letters are 
// symbols. Make sure the indexes are stored in an array and those 
// arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(string) {
    let object = {};
    let positionArray = [];
  
    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      for (let j = 0; j < string.length; j++) {
        if (string[j] == letter) {
          positionArray[positionArray.length] = j;
        }
      }
      object[string[i]] = positionArray;
      positionArray = [];
    }
    return object;
  }
  
  console.log(mapLetters("Hamza"));
  

// 4. And who cursed the most in the fight between you and your spouse? 
// Given an object with three rounds, with nested objects as your scores 
// per round, return a string of who cursed the most: If you, return "ME!" 
// If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// Examples:
// determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    
// spouse: 10  },   
// {    me: 0, spouse: 10,  }]) ➞ "DRAW!"
// determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 
// 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
// determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse:
// 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"

var rounds = {
    firstRound: {
        me:10,
        spouse: 5
    },
    secondRound: {
        me:0,
        spouse: 5
    },
    thirdRound: {
        me:5,
        spouse: 5
    }
 }

function determineWhoCursedTheMost(rounds) {

    let me= rounds.firstRound.me + rounds.secondRound.me + rounds.thirdRound.me;
    let spouse=rounds.firstRound.spouse + rounds.secondRound.spouse + rounds.thirdRound.spouse;

    if(me==spouse){
        return console.log("DRAW!")
    } else if(me<spouce){
        return console.log("SPOUSE!")
    } else if(me>spouce){
        return console.log("ME!")
    }
}
determineWhoCursedTheMost(rounds);

// 5. Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0"

var color ={
    red:0,
    green: 128, 
    blue:192
}

function rgbToHex(color){

    var r = color.red;
    var g = color.green;
    var b = color.blue;
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

console.log(rgbToHex(color));

// 6. Create a function that takes an amount of monetary change (e.g. 47 
// cents) and breaks down the most efficient way that change can be 
// made using USD quarters, dimes, nickels and pennies. Your function 
// should return an object.
// CoinValue
// Penny 0.01
// Nickel 0.05
// Dime 0.10
// Quarter 0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

var makeChange = function (change) {
    var result = { q: 0, d: 0, n: 0, p: 0 };
  
    while (change > 0) {
      if (change >= 25) {
        change -= 25;
        result.q++;
      } else if (change >= 10) {
        change -= 10;
        result.d++;
      } else if (change >= 5) {
        change -= 5;
        result.n++;
      } else if (change >= 1) {
        change -= 1;
        result.p++;
      }
    }
    return result;
  };
  console.log(JSON.stringify(makeChange(47)));

// 7. Create a function that takes an array of objects like { name: "John", 
// notes: [3, 5, 4]} and returns an array of objects like { name: "John", 
// avgNote: 4 }. If student has no notes (an empty array) then let's 
// assume avgNote: 0.
// Examples:
// [
//   { name: "John", notes: [3, 5, 4]}
// ] 
// ➞ 
// [
//   { name: "John", avgNote: 4 }
// ]

function studentsAndNotes(array) {
    let objectArray = [];
    for (let i = 0; i < array.length; i++) {
      let object = {};
      let sum = 0;
      let avg = 0;
      let studentName = array[i].name;
      let studentNotes = array[i].notes;
      for (let j = 0; j < studentNotes.length; j++) {
        sum += studentNotes[j];
      }
      avg = sum / studentNotes.length;
      object = { name: studentName, avgNote: avg };
      objectArray.push(object);
    }
  
    return objectArray;
  }
  console.log(studentsAndNotes([{ name: "John", notes: [3, 5, 4] }]));
  
  console.log(
    JSON.stringify(studentsAndNotes([{ name: "John", notes: [3, 5, 4] }]))
  );

// 8. Given an object with students and the grades that they made on the 
// tests that they took, determine which student has the best Test 
// Average. The key will be the student's name and the value will be an 
// array of their grades. You will only have to return the student's name. 
// You do not need to return their Test Average.
// getBestStudent([{  name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, 
// grades: [100, 70, 80]}...]) ➞ "John" // John's avg = 90 // Bob's avg = 
// 83.33

function getBestStudent(array) {
    let objectArray = [];
    for (let i = 0; i < array.length; i++) {
      let object = {};
      let sum = 0;
      let avg = 0;
      let studentName = array[i].name;
      let studentNotes = array[i].notes;
      for (let j = 0; j < studentNotes.length; j++) {
        sum += studentNotes[j];
      }
      avg = sum / studentNotes.length;
      object = { name: studentName, avgNote: avg };
      // console.log(object);
      objectArray.push(object);
    }
    let bestStudentName;
    for (let l = 0; l < 1; l++) {
      let maxAvg = objectArray[0].avgNote;
      bestStudentName = objectArray[0].name;
  
      for (let k = 0; k < objectArray.length; k++) {
        if (objectArray[k].avgNote > maxAvg) {
          maxAvg = objectArray[k].avgNote;
          bestStudentName = objectArray[k].name;
        } else continue;
      }
    }
    return bestStudentName;
  }
  
  console.log(
    getBestStudent([
      { name: "John", notes: [100, 90, 80] },
      { name: "Bob", notes: [100, 70, 80] },
    ])
  );
