/** ***********************/
/** FUNCTION */
/** ***********************/

const square = (side: number) => side * side

let greet: Function
greet = () => console.log('Hello')

const add = (a: number, b: number, c: number): number => a + b + c
// console.log(add(1, 2, 3))

const add2 = (a: number, b: number, c?: number | string) => {
  if (c) return c
  return a + b
}
// console.log(add2(1, 2, '23'))

const minus = (a: number, b: number, c: number | string = 10): string =>
  String(c)
// console.log(minus(1, 2))
