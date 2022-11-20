import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-spacing: 0;
  border-radius: 10px;
  margin-top: 20px;
`

export const TableHeaderItem = styled.th`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 10px;

  :last-child {
    border-right: 0;
  }
`

export const TableBodyRowItem = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`

export const TableBodyItem = styled.td`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 10px;
  text-align: center;

  :last-child {
    border-right: 0;
  }
`
