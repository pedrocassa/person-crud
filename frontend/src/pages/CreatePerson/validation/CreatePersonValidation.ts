import { Errors, PersonType } from 'types/Enums'
import * as yup from 'yup'

export type AddressFormType = {
  cep: string
  street: string
  number: string
  complement: string
  city: string
  uf: string
  neighborhood: string
}

export const addressFormInitialValues = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  city: '',
  uf: '',
  neighborhood: ''
}

export type CreatePersonFormType = {
  fullName: string
  cpf: string
  cnpj: string
  birthDate: string
  foundingDate: string
  personType: PersonType
  addresses: AddressFormType[]
}

export const initialValues: CreatePersonFormType = {
  fullName: '',
  cpf: '',
  cnpj: '',
  birthDate: '',
  foundingDate: '',
  personType: PersonType.PHYSICAL_PERSON,
  addresses: new Array(2).fill(addressFormInitialValues)
}

export const validationSchema = yup.object().shape({
  personType: yup.mixed<PersonType>().oneOf(Object.values(PersonType)),
  fullName: yup.string().required(Errors.REQUIRED_FIELD),
  cpf: yup.string().when('personType', {
    is: PersonType.PHYSICAL_PERSON,
    then: yup.string().required(Errors.REQUIRED_FIELD)
  }),
  cnpj: yup.string().when('personType', {
    is: PersonType.LEGAL_PERSON,
    then: yup.string().required(Errors.REQUIRED_FIELD)
  }),
  birthDate: yup.string().when('personType', {
    is: PersonType.PHYSICAL_PERSON,
    then: yup.string().required(Errors.REQUIRED_FIELD)
  }),
  foundingDate: yup.string().when('personType', {
    is: PersonType.LEGAL_PERSON,
    then: yup.string().required(Errors.REQUIRED_FIELD)
  }),
  addresses: yup
    .array()
    .of(
      yup.object().shape({
        cep: yup.string().required(Errors.REQUIRED_FIELD),
        street: yup.string().required(Errors.REQUIRED_FIELD),
        number: yup.string().required(Errors.REQUIRED_FIELD),
        complement: yup.string(),
        city: yup.string().required(Errors.REQUIRED_FIELD),
        uf: yup.string().required(Errors.REQUIRED_FIELD),
        neighborhood: yup.string().required(Errors.REQUIRED_FIELD)
      })
    )
    .min(2, Errors.REQUIRED_FIELD)
    .required(Errors.REQUIRED_FIELD)
})
