class Person {
  constructor(jmeno, vek) {
      this.jmeno = jmeno;
      this.vek = vek;
    }
  
    toString() {
      return `Jmenuji se ${this.jmeno} a je mi ${this.vek} let.`;
    }
  }
  

  const person1 = new Person("Jan", 24);
  console.log(person1);