import { Address } from './Address'

export class Person {
  id!: number
  fullName!: string
  cpf!: string
  birthDate!: Date
  addresses!: Address[]
}
