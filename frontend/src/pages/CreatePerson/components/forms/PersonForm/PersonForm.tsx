import React from 'react'
import { Input } from 'shared'
import * as S from './styles'

export function PersonForm() {
  return (
    <S.Container>
      <Input label={'Nome completo'} />
      <Input label={'CPF'} />
      <Input label={'CNPJ'} />
    </S.Container>
  )
}
