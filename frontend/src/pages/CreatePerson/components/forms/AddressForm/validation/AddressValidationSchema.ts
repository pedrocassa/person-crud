import { Errors } from 'types/Enums'
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

export const addressInitialValues: AddressFormType = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  city: '',
  uf: '',
  neighborhood: ''
}

export const addressValidationSchema = yup.object().shape({
  cep: yup.string().required(Errors.REQUIRED_FIELD),
  street: yup.string().required(Errors.REQUIRED_FIELD),
  number: yup.string().required(Errors.REQUIRED_FIELD),
  complement: yup.string(),
  city: yup.string().required(Errors.REQUIRED_FIELD),
  uf: yup.string().required(Errors.REQUIRED_FIELD),
  neighborhood: yup.string().required(Errors.REQUIRED_FIELD)
})
