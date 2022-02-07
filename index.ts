import { Invoice, Payment } from './basic/ClassForImplements'
import { IHasPrint } from './basic/IHasClass'

const documentOne: IHasPrint = new Invoice('Vinamilk', 'drink milk', 500000000)
const documentTwo: IHasPrint = new Payment('Vietnam Airlines', 'fly', 250000000)

const allDocument: IHasPrint[] = []
allDocument.push(documentOne)
allDocument.push(documentTwo)

console.log(allDocument)
