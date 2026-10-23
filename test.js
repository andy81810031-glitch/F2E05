class A {
  action() {
    console.log("A-action"); // 5
  }

  say() {
    console.log("A-say");
  }
}

class B extends A {
  action() {
    console.log("B1"); // 4
    super.action(); // -
    console.log("B2"); // 6
  }

  say() {
    console.log("S1"); // 2
    this.action(); // -
    console.log("S2");
  }
}

class C extends B {
  action() {
    console.log("C1"); // 3
    super.action(); // -
    console.log("C2"); // 7
  }

  run() {
    console.log("開始"); // 1
    super.say(); // -
    console.log("結束"); // 8
  }
}

const obj = new C();

obj.run();