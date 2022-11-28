import React from 'react'
import * as S from './styles'
import { cepService } from 'services'
import { FieldArrayRenderProps, getIn, useFormikContext } from 'formik'
import {
  addressFormInitialValues,
  CreatePersonFormType
} from '../../../validation'
import { Button, Dropdown, Input, Masks, Tooltip, UFs } from 'shared'
import { MdInfoOutline } from 'react-icons/md'
import { theme } from 'styles'

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
        setFieldValue(`addresses[${formIndex}].city`, response.data.localidade)
        setFieldValue(
          `addresses[${formIndex}].neighborhood`,
          response.data.bairro
        )
        setFieldValue(
          `addresses[${formIndex}].street`,
          response.data.logradouro
        )
        setFieldValue(`addresses[${formIndex}].uf`, response.data.uf)
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

  console.log(formIndex, errors, touched)

  return (
    <S.Container>
      <S.Row>
        <S.Column proportionNumber={1}>
          <Input
            label={'CEP'}
            mask={Masks.onlyNumbers}
            value={values.addresses[formIndex].cep}
            onChange={handleChange(`addresses[${formIndex}].cep`)}
            onBlur={() => {
              setFieldTouched(`addresses[${formIndex}].cep`, true)
              values.addresses[formIndex].cep &&
                searchCep(values.addresses[formIndex].cep)
            }}
            error={
              getIn(touched, `addresses[${formIndex}].cep`) &&
              getIn(errors, `addresses[${formIndex}].cep`)
                ? getIn(errors, `addresses[${formIndex}].cep`)
                : undefined
            }
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
            onChange={handleChange(`addresses[${formIndex}].street`)}
            onBlur={() =>
              setFieldTouched(`addresses[${formIndex}].street`, true)
            }
            error={
              getIn(touched, `addresses[${formIndex}].street`) &&
              getIn(errors, `addresses[${formIndex}].street`)
                ? getIn(errors, `addresses[${formIndex}].street`)
                : undefined
            }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column proportionNumber={1}>
          <Input
            label={'Número'}
            mask={Masks.onlyNumbers}
            value={values.addresses[formIndex].number}
            onChange={handleChange(`addresses[${formIndex}].number`)}
            onBlur={() => {
              setFieldTouched(`addresses[${formIndex}].number`, true)
              values.addresses[formIndex].number &&
                searchCep(values.addresses[formIndex].street)
            }}
            error={
              getIn(touched, `addresses[${formIndex}].number`) &&
              getIn(errors, `addresses[${formIndex}].number`)
                ? getIn(errors, `addresses[${formIndex}].number`)
                : undefined
            }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column proportionNumber={2}>
          <Input
            label={'Complemento'}
            value={values.addresses[formIndex].complement}
            onChange={handleChange(`addresses[${formIndex}].complement`)}
            onBlur={() =>
              setFieldTouched(`addresses[${formIndex}].complement`, true)
            }
            error={
              getIn(touched, `addresses[${formIndex}].complement`) &&
              getIn(errors, `addresses[${formIndex}].complement`)
                ? getIn(errors, `addresses[${formIndex}].complement`)
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
            value={values.addresses[formIndex].neighborhood}
            onChange={handleChange(`addresses[${formIndex}].neighborhood`)}
            onBlur={() =>
              setFieldTouched(`addresses[${formIndex}].neighborhood`, true)
            }
            error={
              getIn(touched, `addresses[${formIndex}].neighborhood`) &&
              getIn(errors, `addresses[${formIndex}].neighborhood`)
                ? getIn(errors, `addresses[${formIndex}].neighborhood`)
                : undefined
            }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column>
          <Input
            label={'Cidade'}
            value={values.addresses[formIndex].city}
            onChange={handleChange(`addresses[${formIndex}].city`)}
            onBlur={() => setFieldTouched(`addresses[${formIndex}].city`, true)}
            error={
              getIn(touched, `addresses[${formIndex}].city`) &&
              getIn(errors, `addresses[${formIndex}].city`)
                ? getIn(errors, `addresses[${formIndex}].city`)
                : undefined
            }
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
            onChange={handleChange(`addresses[${formIndex}].uf`)}
            onBlur={() => setFieldTouched(`addresses[${formIndex}].uf`, true)}
            error={
              getIn(touched, `addresses[${formIndex}].uf`) &&
              getIn(errors, `addresses[${formIndex}].uf`)
                ? getIn(errors, `addresses[${formIndex}].uf`)
                : undefined
            }
          />
        </S.Column>
        <S.Column proportionNumber={4}></S.Column>
        <S.Column proportionNumber={4}>
          <S.ButtonContainer>
            {typeof errors.addresses === 'string' ? (
              <Tooltip tip={errors.addresses} backgroundColor={'error'}>
                <MdInfoOutline size={35} color={theme.colors.error} />
              </Tooltip>
            ) : (
              <></>
            )}

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
