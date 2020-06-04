// exportなかったらこれもうごかぬ
declare global {
  interface Window {
    main: Main;
  }
}

class A {
  mogetaA = 'mogetaA';
  constructor() {
    console.log('A: constructor');
  }

  getMogeta() {
    return this.mogetaA;
  }
}
class B {
  mogetaB = 'mogetaB';
  constructor() {
    console.log('B: constructor');
  }

  getMogeta() {
    return this.mogetaB;
  }
}

export class Main {
  constructor(private a: A, private b: B) {}

  getMogeta() {
    console.log(this.a.getMogeta(), this.b.getMogeta());
  }
}

const a = new A();
const b = new B();
const main = new Main(a, b);
console.log(main);

window.main = main;
