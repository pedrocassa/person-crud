import React from 'react'
import * as S from './styles'
import { MdSearch } from 'react-icons/md'

export const SearchField: React.FC = () => {
  return (
    <S.Container>
      <S.InputField />
      <S.IconContainer>
        <MdSearch size={24} />
      </S.IconContainer>
    </S.Container>
  )
}
