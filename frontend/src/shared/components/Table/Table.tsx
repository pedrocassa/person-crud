import React from 'react'
import { Column, useTable } from 'react-table'
import * as S from './styles'

interface TableProps {
  columns: Column<Record<string, unknown>>[]
  data: Record<string, unknown>[]
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <S.Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, headerKey) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerKey}>
            {headerGroup.headers.map((column, columnKey) => (
              <S.TableHeaderItem {...column.getHeaderProps()} key={columnKey}>
                {column.render('Header')}
              </S.TableHeaderItem>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row)
          return (
            <S.TableBodyRowItem {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                return (
                  <S.TableBodyItem {...cell.getCellProps()} key={cellIndex}>
                    {cell.render('Cell')}
                  </S.TableBodyItem>
                )
              })}
            </S.TableBodyRowItem>
          )
        })}
      </tbody>
    </S.Table>
  )
}
