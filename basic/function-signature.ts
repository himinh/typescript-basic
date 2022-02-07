/** ***********************/
/** FUNCTION SIGNATURE */
/** ***********************/

// let greet: Function
// greet = () => console.log('Say hello!!!')

let greet: (a: string, b: number) => void
greet = (name: string, age: number) =>
  console.log(`${name} has ${age} year old.`)

greet('Minh', 20)

let caculate: (a: number, b: number, c: string) => number
caculate = (numberOne: number, numberTwo: number, action: string) =>
  action === 'add' ? numberOne + numberTwo : numberOne - numberTwo

caculate(12, 12, 'add')

type Student = { name: string; age: number }

let printStudent: (user: Student) => void

printStudent = (myStudent: Student) =>
  console.log(`Student ${myStudent.name} is ${myStudent.age} year old.`)

printStudent({ name: 'minh', age: 12 })
