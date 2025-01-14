/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
foods.push('pizza', 'cheeseburger');
console.log('Exercise 2 result:', foods);


console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

//EX4---------------
favFood = foods[1]
console.log('Exercise 4 result:', favFood);

//EX5--------------------
foods.splice(2, 0, 'tofu')
console.log('Exercise 5 result:', foods);

//EX6----------------------
foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods);

//EX7-----------------------
const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

//EX8-------------------------
soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

//EX9--------------------------
const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

//EX10-------------------------
const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);

//EX11---------------------------
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

//const odds = [];
let odds = [];
for (let i = 0; i < nums.length; i++) {
    // let nums2 = nums[i]/2
    // let numTest = Number.isInteger(nums2);   
    // if (numTest === false){
    //     nums2 = 0;
    // }
    if (nums[i]%2 !== 0) {
      
        odds.push(nums[i])
    }
    
  }
//console.log('Exercise 11 result:', odds);
// console.log(numTest);
console.log('Exercise 11 result:', odds);

//EX12---------------------------------------------
let fizz = [];
let buzz = [];
let fizzbuzz = [];
for (let i2 = 0; i2 < nums.length; i2++) {
    if (nums[i2]%5 === 0 && nums[i2]%3 === 0){
        fizzbuzz.push(nums[i2])
    }
     if (nums[i2]%3 === 0) {
      
        fizz.push(nums[i2])

    } 
     if (nums[i2]%5 === 0) {

        buzz.push(nums[i2])
    }

    // } else if (nums[i2]%5 === 0) {

    //     fizzbuzz.push(nums[i2])
    // }
 
    
  }
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzy:', fizzbuzz);

//EX13--------------------------------
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length-1];

console.log('Exercise 13 result:', numList);

//EX14------------------------------------
const Arry1 = numArrays[2];
const num = Arry1[1];

console.log('Exercise 14 result:', num);

//EX15------------------------------
total = 0;
numArrays.forEach((element) => {total = total +1});
console.log('Exercise 15 result:\n', total);
# js-arrays-lab-
