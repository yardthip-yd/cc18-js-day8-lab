// TOPIC: CLASS

// Lab 1
// class Calculator {
//   constructor (init = 0) {
//     this.value = init;
//   }
//   add(num) {
//     console.log(this.value += num)
//   }
//   subtract(num) {
//     this.value -= num
//     return this.value
//   }
//   multi(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log (`Value = ${this.value}`)
//   }
// }

// let result = new Calculator(10)
// result.show()
// result.add(5)
// console.log(result.subtract(3))
// console.log(result.multi(7))
// console.log(result.divide(2))

// Lab 2

// class Sale {
//   constructor (_name, _amount, _price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price 
//   }
//   calcPrice() {
//     return this.amount * this.price
//   }
// }

// class Beverage extends Sale {
//   // constructor(_name, _amount, _price) {
//   //   super(_name, _amount, _price)
//   // }
// }
// let result = new Beverage('Pepsi', 5, 20)
// console.log(result.calcPrice())

// TOPIC: STATIC METHOD

// Lab 1

// let checkArr = (arr) => {
//   return Array.isArray(arr)
// }

// let result1 = checkArr([1,2,3]);
// let result2 = checkArr({});
// console.log(result1)
// console.log(result2) 


// TOPIC: Object Key, Value, Entries

// Lab 1

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let keys = Object.keys(salaries)
// console.log(keys)

// let sumSalaries1 = keys.reduce ((prev, curr) => {
//   return prev += salaries[curr]
// }, 0)

// console.log(sumSalaries1)


// let values = Object.values(salaries)
// console.log(keys)

// let sumSalaries2 = values.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(sumSalaries2)


// Lab 2

// let checkEmptyObj = (obj) => {
//   let check = Object.keys(obj).length == 0 ? true : false 
//   return check
//   }

// console.log(checkEmptyObj({}))
// console.log(checkEmptyObj({name: 'cindy'}))


// TOPIC: Rest

// Lab 1

// function multi (...nums) {
//   let result = 1
//   for (let num of nums) {
//     result *= num
//   }
//   return result
// }
// console.log(multi(1,2,3))


// Lab 2

// function filterOutOdds (...nums) {
//   let result = []
//   for (let num of nums) {
//     if (num % 2 == 0) 
//     result.push(num)
//   }
//   return result
// }
// console.log(filterOutOdds(2,3,4,5,6))

// วิธีที่ 2

// let filterOutOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     return item % 2 == 0
//   })
//   return odd
// }

// let result = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)

// Lab 3

// function mergeObjects(...objs) {
//   return Object.assign({}, ...objs)
// }

// const obj1 = { name: 'cindy' }
// const obj2 = { age: 4 }
// const obj3 = { year: 2024 }

// const merge = mergeObjects(obj1, obj2, obj3)
// console.log(merge)

// วิธีที่ 2

// let mergeObjects = (...obj) => {
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return empty
// }
// let obj1 = { name: 'cindy' }
// let obj2 = { age: 5 }
// let result = mergeObjects(obj1, obj2)
// console.log(result)


// TOPIC: Spread

// Lab 4 

// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]

// const num3 = [5, ...num1, -6, -1, ...num2]
// console.log(num3)

// // หาผลรวมของทุก element
// let sum = num3.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(sum)


// Lab 5

// let arr = [1, 2, 3, 4, 5]

// let editArr = () => {
//     let newArr = [...arr]
//     console.log(newArr)
//     newArr[3] = newArr[3] ** 2
//     return newArr
// }

// let result = editArr(arr)
// console.log(result)


// Lab 6

// let getInfo = (fname, lname, ...hobbies) => { 
//   return [fname, lname, ...hobbies]
// }
// let result = getInfo('cindy', 'moon', 'play game', 'travel')
// console.log(result)


// Lab 7

// let doubleAndReturnArgs = (arr,...num) => {
//   // console.log(arr)
//   // console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   // console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result1 = doubleAndReturnArgs([1, 2, 3], 4, 4)
// let result2 = doubleAndReturnArgs([2], 10, 4)
// console.log(result1)
// console.log(result2)


// Lab 9

// let arr = [1, 2, 3, 4, 5]
// let cloneArr = (arr) => {
//   let newArr = [...arr]
//   return newArr
// }
// let result = cloneArr(arr)
// console.log(result)


// Lab 10

// let obj = {
//   fname: 'cindy',
//   age: 17,
//   gender: 'female'
// }

// let cloneObject = (obj) => {
//   let newObj = {...obj}
//   return newObj
// }

// let result = cloneObject(obj)
// console.log(result)


// TOPIC: Destructuring

// Lab 11

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // Maya 
// console.log(second); // Marisa 
// console.log(third); // Chi  
// เพราะลำดับตัวแปรตรงกัน


// Lab 12

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // Raindrops on roses
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // [Bright copper kettles, warm woolen mittens]
// เพราะลำดับตัวแปรตรงกัน

// Lab 13

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]; 
// console.log(numbers); // [10, 30, 20]
// เพราะลำดับตัวแปรถูกสลับตำแหน่ง

// Lab 14

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 }; 
// let { numPlanets, yearNeptuneDiscovered } = facts; 
// console.log(numPlanets); // 8 
// console.log(yearNeptuneDiscovered); // 1846
// เพราะค่า keys คือตัวเดียวกัน

// Lab 15

// let planetFacts = {
//   numPlanets: 8, 
//   yearNeptuneDiscovered: 1846, 
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts; 
// console.log(discoveryYears); // { yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846 }
// เพราะ ตัวแปร discoveryYears เป็น rest pattern ที่เก็บค่า key และ value ที่เหลือ


// Lab 16

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }));
 
// // Your name is Alejandro and you like purple
// // เพราะมีการกำหนด value ใหม่ ทั้ง firstname และ favoriteColor

// console.log(getUserData({ firstName: 'Melissa' })); 

// // Your name is Melissa and you like green
// // เพราะมีการกำหนด value ใหม่ สำหรับ firstname 
// // แต่ favoriteColor เป็น green เพราะเป็น default value ที่กำหนดไว้

// console.log(getUserData({})); 

// // Your name is undefined and you like green 
// // firstname เป็น undefined เพราะไม่ได้กำหนด value ไว้
// // แต่ favoriteColor เป็น green เพราะเป็น default value ที่กำหนดไว้


// Lab 17

// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest]
// console.log(guest) // 'Pete'
// console.log(admin) // 'Jane'


// Lab 18

// function checkAge (user) {
//   let { fname, lname, age } = user
//   return (age >= 18) ? `Hello! ${fname} ${lname}` : 'ไม่มีสิทธิ์เข้าใช้งาน'
// }

// let user1 = { fname: 'Alice', lname: 'Wang', age: 15 }
// let user2 = { fname: 'Andy', lname: 'Jo', age: 18 }

// console.log(checkAge(user1))
// console.log(checkAge(user2))


// Lab 19

// let user = {
//   name: 'John',
//   years: 27
// };

// let { name, age, isAdmin = 'false'} = user
// console.log(name)
// console.log(age)
// console.log(isAdmin)


// Lab 21

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// Lab 22

// const obj = { prop: 5, prop2: 10 };
// const {prop: a, prop2: b} = obj

// console.log(a)
// console.log(b)


// Lab 23

// let a, b;
// { a, b } = { a: 1, b: 2 };
// console.log(a) // error
// console.log(b) // error


// Lab 24

// const [, , , a, b] = [1, 2, 3];
// console.log(a) // undefined
// console.log(b) // undefined


// Lab 25

// const q = { prop: 5, prop2: [10, 100] };
// const { prop:x, prop2: [ ,y]} = q
// console.log(x)
// console.log(y)


// Lab 26

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const { prop: x, prop2: {prop2: { nested: [ , y, ]}} } = q

// console.log(x)
// console.log(y)


// Lab 27

// const names = [
//   { firstName: 'John', lastName: 'Doe' }, 
//   { firstName: 'Jack', lastName: 'Dann' }, 
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let { firstName, lastName } of names) {
//   console.log(`Full Name: ${firstName} ${lastName}`)
// }


// Lab 28

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 }, 
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let { user, age = 'unknown' } of users) {
//   console.log(`user: ${user}, age: ${age}`)
// }