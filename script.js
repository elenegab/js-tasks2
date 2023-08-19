// 1.შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;
let numbers = [ 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]
function sumPositive(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        if(i > 0){
            sum += i
        }
    }
    return sum
}
let result = sumPositive([2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]);
console.log(result);

// 2.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9
function sumPositive2(...numbers2){
    let sum = 0;
    for(let item of numbers2){
        sum += item
    }
    return sum;
}
let result2 = sumPositive2(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result2);
        
//   3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  function printName(name){
    if(name.isloggedin){
        return `${user.firstname} ${user.lastname}`
    }else{
        return false
    }
  }
  let resulFunct = printName(user);
  console.log(resulFunct);

//   4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMaxValue(array) {
      let maxValue = array[0];
        for (let item of array) {
          if (item > maxValue) {
            maxValue = item;
          }
        }
    
        return maxValue;
    }
    
    let resultMaxValue = getMaxValue([5, 14, 12, 50, 70, 3])
    console.log(resultMaxValue);

// 5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

function checkEvenOdd(number4) {
    if (number4 % 2 === 0){
        return "this number is even";
    }else{
        return "this number is odd";
        
    }
}
let num = 10
console.log(checkEvenOdd(num));

// 6.მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray); // [5, 4, 3, 2, 1]

// 7.ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;
let ageFunction = (birthYear,yearNow) => {
    let age = yearNow - birthYear;
    if(age >18){
        return "სრულწლოვანი"
    }else{
        return "არასრულწლოვანი"
    }
}
let ageResult = ageFunction(2004, 2023)
console.log(ageResult);

// 8.მოცემულია მასივი
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i of array2){
    if(i == 5){
        console.log("aris");
        break
    }
}

// 9.მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];
 for(let i of array5){
    if(i == 7){
        continue
    }
    console.log(i);
 }

 