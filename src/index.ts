class Person {
  private name:string;
  protected sex:string
  age:number;
  constructor(name:string, age:number, sex:string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}


class My extends Person {
  constructor( name:string, age:number, sex:string) {
    super(name,age,sex)
  }
  
}

let test = new My('张三',23,"男")
let test1 = new Person('张三',23,"男")

console.log(test1.name)