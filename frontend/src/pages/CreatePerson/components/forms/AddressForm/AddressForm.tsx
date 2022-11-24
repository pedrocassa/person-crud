import React from 'react'
import * as S from './styles'
import { cepService } from 'services'
import { useFormik } from 'formik'
import {
  AddressFormType,
  addressInitialValues,
  addressValidationSchema
} from './validation'
import { Input, Masks } from 'shared'

export function AddressForm() {
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    touched,
    errors
  } = useFormik<AddressFormType>({
    initialValues: addressInitialValues,
    validationSchema: addressValidationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  const searchCep = async (cep: string) => {
    try {
      cepService.get(`/${cep}/json`).then((response) => {
        setFieldValue('city', response.data.localidade)
        setFieldValue('neighborhood', response.data.bairro)
        setFieldValue('street', response.data.logradouro)
        setFieldValue('uf', response.data.uf)
      })
    } catch (error: any) {
      console.log(error.message)
    }
  }

  console.log(errors, touched)

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Row>
        <S.Column>
          <Input
            label={'CEP'}
            mask={Masks.onlyNumbers}
            value={values.cep}
            onChange={handleChange('cep')}
            onBlur={() => {
              setFieldTouched('cep', true)
              values.cep && searchCep(values.cep)
            }}
            error={touched.cep && errors.cep ? errors.cep : undefined}
            fullWidth
          />
        </S.Column>
        <S.Column>
          <Input
            label={'Número'}
            mask={Masks.onlyNumbers}
            value={values.number}
            onChange={handleChange('number')}
            onBlur={() => {
              setFieldTouched('number', true)
              values.number && searchCep(values.number)
            }}
            error={touched.number && errors.number ? errors.number : undefined}
            fullWidth
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input
            label={'Endereço'}
            value={values.street}
            onChange={handleChange('street')}
            onBlur={() => setFieldTouched('street', true)}
            error={touched.street && errors.street ? errors.street : undefined}
            fullWidth
          />
        </S.Column>
        <S.Column>
          <Input
            label={'Complemento'}
            value={values.complement}
            onChange={handleChange('complement')}
            onBlur={() => setFieldTouched('complement', true)}
            error={
              touched.complement && errors.complement
                ? errors.complement
                : undefined
            }
            fullWidth
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input
            label={'Bairro'}
            value={values.neighborhood}
            onChange={handleChange('neighborhood')}
            onBlur={() => setFieldTouched('neighborhood', true)}
            error={
              touched.neighborhood && errors.neighborhood
                ? errors.neighborhood
                : undefined
            }
            fullWidth
          />
        </S.Column>
        <S.Column>
          <Input
            label={'Cidade'}
            value={values.city}
            onChange={handleChange('city')}
            onBlur={() => setFieldTouched('city', true)}
            error={touched.city && errors.city ? errors.city : undefined}
            fullWidth
          />
        </S.Column>
      </S.Row>
    </S.Container>
  )
}
