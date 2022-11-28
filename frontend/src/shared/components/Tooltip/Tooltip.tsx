import React, { ReactNode } from 'react'
import * as S from './styles'
import ReactTooltip from 'react-tooltip'
import { theme } from 'styles'

type TooltipProps = {
  children: string | ReactNode
  tip: string
  type?: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light'
  effect?: 'float' | 'solid'
  backgroundColor?: keyof typeof theme.colors
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tip,
  type,
  backgroundColor,
  effect
}) => {
  const renderContent = () => {
    if (typeof children === 'string') return <span>{children}</span>

    return <>{children}</>
  }

  return (
    <S.Container>
      <p data-tip={tip}>{renderContent()}</p>
      <ReactTooltip
        type={type}
        backgroundColor={backgroundColor && theme.colors[backgroundColor]}
        effect={effect}
      />
    </S.Container>
  )
}
