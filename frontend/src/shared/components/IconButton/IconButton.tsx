import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type IconButtonProps = {
  onClick: () => void
  disabled?: boolean
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  disabled,
  children,
  type,
  ...props
}) => {
  return (
    <S.Container type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </S.Container>
  )
}
