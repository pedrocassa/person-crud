import React, { useState } from 'react'
import { Input, Masks, RadioButtonOption, RadiouInput } from 'shared'
import { PersonType } from 'types/enums'
import * as S from './styles'

export function PersonForm() {
  const [checkedValue, setCheckedValued] = useState('')

  const radiouButtonOptions: RadioButtonOption[] = [
    { optionLabel: 'Pessoa Física', value: PersonType.PHYSICAL_PERSON },
    { optionLabel: 'Pessoa Jurídica', value: PersonType.LEGAL_PERSON }
  ]

  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <Input label={'Nome completo'} fullWidth />
        </S.Column>
        <S.Column>
          <RadiouInput
            label={'Tipo de pessoa'}
            options={radiouButtonOptions}
            selected={checkedValue}
            selectValue={setCheckedValued}
          />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          {checkedValue === PersonType.LEGAL_PERSON ? (
            <Input label={'CNPJ'} mask={Masks.cnpjMask} fullWidth />
          ) : (
            <Input label={'CPF'} mask={Masks.cpfMask} fullWidth />
          )}
        </S.Column>
        <S.Column>
          {checkedValue === PersonType.LEGAL_PERSON ? (
            <Input label={'Data de fundação'} mask={Masks.dateMask} fullWidth />
          ) : (
            <Input
              label={'Data de nascimento'}
              mask={Masks.dateMask}
              fullWidth
            />
          )}
        </S.Column>
      </S.Row>
    </S.Container>
  )
}
