import { Person } from './Person'

export class Address {
  id!: number
  street!: string
  cep!: string
  number!: string
  complement!: string
  city!: string
  uf!: string
  neighborhood!: string
  people!: Person[]
}
