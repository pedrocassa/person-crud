import styled from 'styled-components'

export const Container = styled.div`
  height: 40px;
  display: flex;
  flex-direction: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 40px;
`

export const InputField = styled.input`
  width: 95%;
  border: none;
  padding: 5px 0;
  margin: 0 20px;
  font-size: ${({ theme }) => theme.font.sizes.small};

  :focus {
    outline: none;
  }
`

export const IconContainer = styled.div`
  width: 5%;
  height: 100%;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`
