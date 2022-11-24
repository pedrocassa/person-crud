import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = {
  label: string
  error?: string
  mask?: (string | RegExp)[]
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({
  label,
  error,
  mask,
  fullWidth,
  ...props
}) => {
  return (
    <S.Container fullWidth={fullWidth}>
      <S.Label>{label}</S.Label>

      <S.InputContainer>
        {mask ? (
          <S.MaskedInput mask={mask} guide={false} {...props} />
        ) : (
          <S.Input {...props}></S.Input>
        )}
      </S.InputContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}
