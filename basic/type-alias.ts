/** ***********************/
/** TYPE ALIAS */
/** ***********************/

type stringOrNumber = string | number
type person = {
  id: stringOrNumber
  name: string
  age: number
}

let studentDetails: person
studentDetails = {
  id: 12,
  name: 'minh',
  age: 12,
}

let greet = (user: person) => console.log(`${user.name} say hi!!`)

greet({
  id: 12,
  name: 'minh',
  age: 12,
})
