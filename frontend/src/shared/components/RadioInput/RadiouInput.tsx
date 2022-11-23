import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type RadioButtonOption = {
  optionLabel: string
  value: string
}

type RadiouInputProps = {
  label: string
  error?: string
  options: RadioButtonOption[]
  selected: string
  selectValue: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const RadiouInput: React.FC<RadiouInputProps> = ({
  label,
  error,
  options,
  selected,
  selectValue,
  ...props
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>

      <S.InputContainer>
        {options.map((option, index) => (
          <S.InputLabel key={index}>
            <S.Input
              type={'radio'}
              checked={option.value === selected}
              onChange={() => selectValue(option.value)}
              {...props}
            />
            {option.optionLabel}
          </S.InputLabel>
        ))}
      </S.InputContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}
