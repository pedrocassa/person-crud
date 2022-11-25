import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

type StyledButtonProps = Pick<
  ButtonProps,
  'fullWidth' | 'outlined' | 'backgroundColor'
>

const ButtonModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  outlined: (color?: string) => css`
    background-color: transparent;
    color: ${color ?? 'black'};
    border: 1px solid ${color ?? 'black'};
  `
}

export const Container = styled.button<StyledButtonProps>`
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px 30px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : 'black'};

  border-radius: 10px;
  border: none;
  ${({ fullWidth }) => fullWidth && ButtonModifiers.fullWidth()}
  ${({ outlined, color }) => outlined && ButtonModifiers.outlined(color)};

  p {
    text-transform: uppercase;
  }

  &:hover {
    opacity: 0.8;
    scale: 1.02;
  }

  span {
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-transform: uppercase;
  }
`
