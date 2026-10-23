

// "use strict";

// function hi() {
//   console.log(this);
// }

// function hey() {
//   console.log(this);
// }

// hi();
// hey();



// const hero = {
//   hp: 100,
//   mp: 30,
//   attack: function () {
//     console.log("ATTACK!");
//   },
// };

// const mage = {
//   hp: 80,
//   mp: 100,
//   attack: function () {
//     console.log("attack~~");
//   },
//   heal: function () {
//     this.hp += 30;
//   },
// };

// console.log(hero);
// mage.heal.apply(hero);
// console.log(hero);



// const hero = {
//   name: "cc",
//   age: 18,
//   attack: function (x, y) {
//     console.log(x, y);
//     console.log(this);
//   },
// };

// const a = [1, 2, 3];
// hero.attack.call(a, 5, 6);
// hero.attack.apply(a, [5, 6]);
// const cc = hero.attack.bind(a);
// cc(5, 6);


// const hero = {
//   name: "cc",
//   age: 18,
//   attack: function () {
//     console.log(this);
//   },
// };

// const aa = hero.attack;
// aa();






// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sleep() {
//     console.log("zzz");
//   }
// }

// class Hero extends Human {
//   attack() {
//     console.log("ATTACK");
//   }
// }

// const h1 = new Hero("cc", 18);

// console.log(h1);
// h1.attack();
// h1.sleep();



// class Hero {
//   contructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   attack() {
//     console.log("ATTACK");
//   }
// }

// const h1 = new Hero("cc", 18);
// console.log(h1);
// h1.attack();