import { useFormikContext } from 'formik'
import { CreatePersonFormType } from 'pages/CreatePerson/validation'
import React, { useState } from 'react'
import { Input, Masks, RadioButtonOption, RadiouInput } from 'shared'
import { PersonType } from 'types/Enums'
import * as S from './styles'

export function PersonForm() {
  const {
    values,
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    errors
  } = useFormikContext<CreatePersonFormType>()

  const radiouButtonOptions: RadioButtonOption[] = [
    { optionLabel: 'Pessoa Física', value: PersonType.PHYSICAL_PERSON },
    { optionLabel: 'Pessoa Jurídica', value: PersonType.LEGAL_PERSON }
  ]

  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <RadiouInput
            label={'Tipo de pessoa'}
            options={radiouButtonOptions}
            selected={values.personType}
            selectValue={(value) => setFieldValue('personType', value)}
            onBlur={() => setFieldTouched('personType', true)}
            error={
              touched.personType && errors.personType
                ? errors.personType
                : undefined
            }
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input
            label={'Nome completo'}
            value={values.fullName}
            onChange={handleChange('fullName')}
            onBlur={() => setFieldTouched('fullName', true)}
            error={
              touched.fullName && errors.fullName ? errors.fullName : undefined
            }
            fullWidth
          />
        </S.Column>
        <S.Separator />
        <S.Column>
          {values.personType === PersonType.LEGAL_PERSON ? (
            <Input
              label={'CNPJ'}
              mask={Masks.cnpjMask}
              value={values.cnpj}
              onChange={handleChange('cnpj')}
              onBlur={() => setFieldTouched('cnpj', true)}
              error={touched.cnpj && errors.cnpj ? errors.cnpj : undefined}
              fullWidth
            />
          ) : (
            <Input
              label={'CPF'}
              mask={Masks.cpfMask}
              value={values.cpf}
              onChange={handleChange('cpf')}
              onBlur={() => setFieldTouched('cpf', true)}
              error={touched.cpf && errors.cpf ? errors.cpf : undefined}
              fullWidth
            />
          )}
        </S.Column>
        <S.Separator />
        <S.Column>
          {values.personType === PersonType.LEGAL_PERSON ? (
            <Input
              label={'Data de fundação'}
              mask={Masks.dateMask}
              value={values.foundingDate}
              onChange={handleChange('foundingDate')}
              onBlur={() => setFieldTouched('foundingDate', true)}
              error={
                touched.foundingDate && errors.foundingDate
                  ? errors.foundingDate
                  : undefined
              }
              fullWidth
            />
          ) : (
            <Input
              label={'Data de nascimento'}
              mask={Masks.dateMask}
              value={values.birthDate}
              onChange={handleChange('birthDate')}
              onBlur={() => setFieldTouched('birthDate', true)}
              error={
                touched.birthDate && errors.birthDate
                  ? errors.birthDate
                  : undefined
              }
              fullWidth
            />
          )}
        </S.Column>
      </S.Row>
    </S.Container>
  )
}
