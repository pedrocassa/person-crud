import React from 'react'
import * as S from './styles'
import { cepService } from 'services'
import { FieldArrayRenderProps, useFormikContext } from 'formik'
import {
  addressFormInitialValues,
  CreatePersonFormType
} from '../../../validation'
import { Button, Dropdown, Input, Masks, UFs } from 'shared'

type AddressFormProps = {
  formIndex: number
  arrayHelpers: FieldArrayRenderProps
}

export const AddressForm: React.FC<AddressFormProps> = ({
  formIndex,
  arrayHelpers
}) => {
  const {
    values,
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors
  } = useFormikContext<CreatePersonFormType>()

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

  const handleClickOnAddButton = () =>
    arrayHelpers.push(addressFormInitialValues)

  const handleClickOnRemoveButton = () => arrayHelpers.remove(formIndex)

  const showAddButton = formIndex === values.addresses.length - 1

  const showRemoveButton = values.addresses.length > 2

  return (
    <S.Container>
      <S.Row>
        <S.Column proportionNumber={1}>
          <Input
            label={'CEP'}
            mask={Masks.onlyNumbers}
            value={values.addresses[formIndex].cep}
            onChange={handleChange(`address[${formIndex}].cep`)}
            onBlur={() => {
              setFieldTouched(`address[${formIndex}].cep`, true)
              values.addresses[formIndex].cep &&
                searchCep(values.addresses[formIndex].cep)
            }}
            // error={
            //   touched.addresses?.[formIndex]?.cep &&
            //   errors.addresses.[formIndex]?.cep
            //     ? errors.addresses?.[formIndex]?.cep
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
        <S.Column proportionNumber={3}></S.Column>
      </S.Row>
      <S.Row>
        <S.Column proportionNumber={3}>
          <Input
            label={'Endereço'}
            value={values.addresses[formIndex].street}
            onChange={handleChange(`address[${formIndex}].street`)}
            onBlur={() => setFieldTouched(`address[${formIndex}].street`, true)}
            // error={
            //   touched.addresses[formIndex].street &&
            //   errors.addresses[formIndex].street
            //     ? errors.addresses[formIndex].street
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column proportionNumber={1}>
          <Input
            label={'Número'}
            mask={Masks.onlyNumbers}
            value={values.addresses[formIndex].number}
            onChange={handleChange(`address[${formIndex}].number`)}
            onBlur={() => {
              setFieldTouched(`address[${formIndex}].number`, true)
              values.addresses[formIndex].number &&
                searchCep(values.addresses[formIndex].street)
            }}
            // error={
            //   touched.addresses[formIndex].street &&
            //   errors.addresses[formIndex].street
            //     ? errors.addresses[formIndex].street
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column proportionNumber={2}>
          <Input
            label={'Complemento'}
            value={values.addresses[formIndex].complement}
            onChange={handleChange(`address[${formIndex}].complement`)}
            onBlur={() =>
              setFieldTouched(`address[${formIndex}].complement`, true)
            }
            // error={
            //   touched.addresses[formIndex].complement &&
            //   errors.addresses[formIndex].complement
            //     ? errors.addresses[formIndex].complement
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input
            label={'Bairro'}
            value={values.addresses[formIndex].neighborhood}
            onChange={handleChange(`address[${formIndex}].neighborhood`)}
            onBlur={() =>
              setFieldTouched(`address[${formIndex}].neighborhood`, true)
            }
            // error={
            //   touched.addresses[formIndex].neighborhood &&
            //   errors.addresses[formIndex].neighborhood
            //     ? errors.addresses[formIndex].neighborhood
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column>
          <Input
            label={'Cidade'}
            value={values.addresses[formIndex].city}
            onChange={handleChange(`address[${formIndex}].city`)}
            onBlur={() => setFieldTouched(`address[${formIndex}].city`, true)}
            // error={
            //   touched.addresses[formIndex].city &&
            //   errors.addresses[formIndex].city
            //     ? errors.addresses[formIndex].city
            //     : undefined
            // }
            fullWidth
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column proportionNumber={2}>
          <Dropdown
            label={'UF'}
            dropdownOptions={UFs}
            value={values.addresses[formIndex].uf}
            onChange={handleChange(`address[${formIndex}].uf`)}
            onBlur={() => setFieldTouched(`address[${formIndex}].uf`, true)}
            // error={
            //   touched.addresses[formIndex].uf && errors.addresses[formIndex].uf
            //     ? errors.addresses[formIndex].uf
            //     : undefined
            // }
          />
        </S.Column>
        <S.Column proportionNumber={4}></S.Column>
        <S.Column proportionNumber={4}>
          <S.ButtonContainer>
            {showRemoveButton && (
              <Button onClick={handleClickOnRemoveButton}>Remover</Button>
            )}

            {showAddButton && (
              <>
                <S.Separator />
                <Button onClick={handleClickOnAddButton} outlined>
                  Adicionar outro endereço
                </Button>
              </>
            )}
          </S.ButtonContainer>
        </S.Column>
      </S.Row>
    </S.Container>
  )
}
