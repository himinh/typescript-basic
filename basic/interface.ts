interface Person {
  name: String
  age: number
  speak(lang: string): void
  spend(amount: number): number
}

const minh: Person = {
  name: 'minh',
  age: 12,
  speak(lang: string) {
    console.log(lang)
  },
  spend(amount: number) {
    return amount
  },
}

console.log(minh.name)
console.log(minh.age)
minh.speak('English')
console.log('Spend: ', minh.spend(12))

const helloPerson = (onePerson: Person) =>
  console.log(`Hello ${onePerson.name}`)

helloPerson(minh)
