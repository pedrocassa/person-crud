import styled from 'styled-components'
import Masked from 'react-text-mask'

export const Container = styled.div``

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 6px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  aling-items: center;
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }
`

export const Input = styled.input`
  margin-right: 10px;
  background-color: black;
`

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.font.sizes.xSmall};
  color: ${({ theme }) => theme.colors.error};
`
