import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import { theme } from 'styles'
import * as S from './styles'

export type ButtonProps = {
  onClick: () => void
  disabled?: boolean
  children: string | ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  outlined?: boolean
  backgroundColor?: keyof typeof theme.colors
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  type,
  ...props
}) => {
  const renderContent = () => {
    if (typeof children === 'string') return <span>{children}</span>

    return <>{children}</>
  }

  return (
    <S.Container type={type} onClick={onClick} disabled={disabled} {...props}>
      {renderContent()}
    </S.Container>
  )
}
