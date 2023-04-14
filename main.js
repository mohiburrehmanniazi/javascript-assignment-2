//assignment no 01 //
function sumOfEvenNumbers(numbers) {
  let i,
    sum = 0;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
let sum = sumOfEvenNumbers([12, 2, 5, 6, 4, 8]);
console.log("sum of even numbers is" + sum);

// ----------******----------

//assignment no 2 //

function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; a < vowels.length; a++) {
      if (string[i] == vowels[a]) {
        count++;
        break;
      }
    }
  }
  return count;
}
console.log("total vowels is" + countVowels("angoor khattay hay"));
countVowels(string)

// ----------******----------

// assignment 03

let string = ["naryal","mosammi","anar","seeb","annanas"]
function findlongestword(string) {
  let stringlength = string[0].length;
  for (let i =1; i < string.length; i++){
    if(string[i].length > stringlength){
       stringlenght = string[i].length
    }
     }
console.log("Biggest String Is " + stringlength)
}
  findlongestword(string)

  // ----------******----------

  // assignment 04

  function getAverage (numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i]
  }
  return sum / numbers.length;
}
let result = getAverage ([2,3,4,5,6]);
 console.log("average is " + result )

 
  // ----------******----------
 

//  assignment 05

function findKeys() {
  let person = {
    name: "mohib",
    age: 19,
    city: "karachi",
  };

  return object.keys(person);
}
console.log(findKeys());


  // ----------******----------

  // assignment 06

  const person = [
    { name: "mohib", age: 19 },
    { name: "Anwar", age: 22 },
    { name: "haider", age: 25 },
  ];
  function valueOfKeys(person) {
    const name = person.name;
    const age = person.age;
    return { name, age };
  }
  
  for (let i = 0; i < person.length; i++) {
    const result = valueOfKeys(person[i]);
    console.log(person[i].name);
    console.log(person[i].age);
  }

    // ----------******----------

  // assignment 07

  const friuts = ["banana", "chikoo", "banana", "apple", "chikoo", "pineapple"];

function simplifyStrings(strings) {
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      if (strings[i] == strings[j]) {
        strings.splice(j, 1);
        j--;
      }
    }
  }
  console.log(strings);
}
simplifyStrings(friuts);


// ----------******----------

  // assignment 08

  function numberOfProduct(numbers) {
    let product = 1;
  
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    console.log("total product is " + product);
  }
  
  numberOfProduct([2, 5, 8, 6, 4, 7]);



  
