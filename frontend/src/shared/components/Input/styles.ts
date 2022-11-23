import styled from 'styled-components'
import Masked from 'react-text-mask'

type ContainerProps = {
  fullWidth?: boolean
}

export const Container = styled.div<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '35%')};
`

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 6px;
`

export const InputContainer = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  aling-items: center;
  padding: 0 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.font.sizes.small};
  border: none;

  :focus {
    outline: none;
  }
`

export const MaskedInput = styled(Masked)`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.font.sizes.small};
  border: none;

  :focus {
    outline: none;
  }
`

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.font.sizes.xSmall};
  color: ${({ theme }) => theme.colors.error};
`
