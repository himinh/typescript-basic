import { IHasPrint } from './IHasClass'

export class Invoice implements IHasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print(): string {
    return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`
  }
}

export class Payment implements IHasPrint {
  constructor(
    readonly recipiend: string,
    private job: string,
    public atm: number
  ) {}

  print() {
    return `I owe ${this.recipiend} ${this.atm} dollar(s) for this job work: ${this.job}`
  }
}
