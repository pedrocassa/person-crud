import styled from 'styled-components'

type ColumnProps = {
  proportionNumber?: number
}

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Column = styled.div<ColumnProps>`
  flex: ${({ proportionNumber }) => (proportionNumber ? proportionNumber : 1)};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
`

export const Separator = styled.div`
  width: 20px;
`
