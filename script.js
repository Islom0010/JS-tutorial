// let me1 = {
//   name: "jnjn",
// };

// let me2 = {
//   name: "jnjn",
// };

// let me3 = me1;
// me3.name = "11111";
// console.log(me1 === me3);
// console.log(me1.name);
// console.log(me3.name);

// console.log(me1 === me2);
// console.log(me1.name === me2.name);

// let name = {
//   name: "Shokhrukh",
//   surName: "Akramov",
// };

// console.log(name);

// Boolean

// True
// console.log(Boolean('name'))
// False
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(false));
// console.log(Boolean(null));

// Typeof

// console.log(false == "");
// console.log(false == []);
// console.log(false == {});
// console.log(0 == "");
// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == null);
// console.log('' == 0);
// console.log('' == []);
// console.log('' == {});

// Values

// let a = 99;
// let b = a;
// b++
// console.log('a', a);
// console.log('b', b);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = a;
// b.push(10)

// console.log('a', a);
// console.log('b', b);
// console.log(a === b);

// let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(a == c);

// Scope

// function funcA() {
//     let a = 1;

//         function funcB() {
//             let b = 2;

//             function funcC() {
//                 let c = 3;
//                 console.log('funcC:',a, b, c);
//             }

//             funcC()
//             console.log('funcB:',a, b,);
//         }
//         funcB()
//             console.log('funcA:',a,);
// }

// funcA()

// Boolean 50/50

// const randomBoolean = () => Math.random () >= 0.5 ;
// console.log(randomBoolean());

// Hoisting

// console.log(sum(1, 41));
// function sum(a, b) {
//     return a + b
// }

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(9);

// calc()

// function createIncrementor(n) {
//   return function(num) {
//     return n + num
//   }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10));
// console.log(addOne(20));

// console.log(addTen(10));
// console.log(addTen(20));

// function urlGenerator(domain) {
//   return function(url) {
//     return `http://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')
// const uzUrl = urlGenerator('uz')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('Netflix'));

// console.log(uzUrl('olx'));
// console.log(uzUrl('eduon'));

// console.log(ruUrl('mail'));
// console.log(ruUrl('yandex'));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPersom() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "John", age: 22, job: "Frontend" };
// const person2 = { name: "Feruz", age: 28, job: "Malyar" };

// bind(person1, logPersom)();
// bind(person2, logPersom)();

const person1 =  {
  name: "Islom", 
  age: 22,
   job: "Frontend"
}
const person2 =  {
  name: "Feruz", 
  age: 29,
   job: "Malyar"
}

function info(phone, email) {
  console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}, Phone:${phone}, Email: ${email}`);
}

info.bind(person1)('3990010', 'Ulmasov_i@yahoo.com')
info.bind(person2)('3991111', 'ssssss_i@yahoo.com')