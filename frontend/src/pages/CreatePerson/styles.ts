import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px 30px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.Large};
`

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`

export const SectionTitle = styled.h2`
  margin-right: 20px;
`

export const Divider = styled.div`
  flex: 1;
  height: 2px;
  background-color: black;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
