/** ***********************/
/** CLASS */
/** ***********************/

// class Employee {
//   public name: string
//   private age: number
//   readonly male: boolean

//   constructor(n: string, a: number, m: boolean) {
//     this.name = n
//     this.age = a
//     this.male = m
//   }
// }

class Employee {
  constructor(
    public name: String,
    private age: number,
    readonly male: boolean
  ) {}

  public printInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Gender male: ${this.male}`
  }
}
const minh = new Employee('minh', 12, false)
console.log(minh.male)
// console.log(minh.age)
console.log(minh.name)

minh.name = 'new min'
console.log(minh)
const bod = new Employee('bod', 21, true)
console.log(bod.male)

let employees: Employee[] = []
employees.push(minh)
employees.push(bod)
console.log(employees)
employees.forEach(e => console.log(e.printInfo()))
