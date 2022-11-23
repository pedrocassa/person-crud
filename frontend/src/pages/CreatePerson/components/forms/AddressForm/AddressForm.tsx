import React from 'react'
import { Input, Masks } from 'shared'
import * as S from './styles'

export function AddressForm() {
  return (
    <S.Container>
      <S.Row>
        <S.Column>
          <Input label={'CEP'} fullWidth />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input label={'Endereço'} fullWidth />
        </S.Column>
        <S.Column>
          <Input label={'Complemento'} fullWidth />
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <Input label={'Bairro'} fullWidth />
        </S.Column>
        <S.Column>
          <Input label={'Cidade'} fullWidth />
        </S.Column>
      </S.Row>
    </S.Container>
  )
}
