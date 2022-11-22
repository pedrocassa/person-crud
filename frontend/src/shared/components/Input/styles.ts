import styled from 'styled-components'
import Masked from 'react-text-mask'

export const Container = styled.div``

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 6px;
`

export const InputContainer = styled.div`
  width: 35%;
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
