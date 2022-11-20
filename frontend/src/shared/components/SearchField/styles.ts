import styled from 'styled-components'

export const Container = styled.div`
  height: 30px;
  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 40px;
  padding: 5px;
`

export const InputField = styled.input`
  width: 95%;
  border: none;
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.font.sizes.small};
`

export const IconContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`
