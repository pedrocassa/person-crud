import React from 'react'
import { AddressForm, PersonForm } from './components'
import * as S from './styles'

export const CreatePerson: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Cadastro de pessoa</S.Title>
      <PersonForm />
      <AddressForm />
    </S.Container>
  )
}
