import { MdKeyboardArrowDown } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div``

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 6px;
`

export const SelectContainer = styled.div`
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Select = styled.select`
  appearance: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 20px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

export const Option = styled.option`
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.font.sizes.xSmall};
  color: ${({ theme }) => theme.colors.error};
`

export const Icon = styled(MdKeyboardArrowDown)`
  margin: 0 10px;
`
