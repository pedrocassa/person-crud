import React, { SelectHTMLAttributes } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import * as S from './styles'

type DropdownProps = {
  dropdownOptions: string[]
  label: string
  error?: string
  placeholder?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Dropdown: React.FC<DropdownProps> = ({
  dropdownOptions,
  label,
  error,
  placeholder,
  ...props
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.SelectContainer>
        <S.Select {...props}>
          <S.Option disabled value={''}>
            {placeholder ?? 'Selecione uma UF'}
          </S.Option>
          {dropdownOptions.map((item, index) => (
            <S.Option key={index}>{item}</S.Option>
          ))}
        </S.Select>
        <S.Icon />
      </S.SelectContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}
