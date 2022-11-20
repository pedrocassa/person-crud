import React from 'react'
import { Table } from 'shared'
import * as S from './styles'

export const ListPeople: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101'
      },
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101'
      },
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101'
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'CPF',
        accessor: 'col1'
      },
      {
        Header: 'Nome Completo',
        accessor: 'col2' // accessor is the "key" in the data
      },
      {
        Header: 'Data de Nascimento',
        accessor: 'col3'
      },
      {
        Header: 'Endereços',
        accessor: 'col4'
      }
    ],
    []
  )

  return (
    <S.Container>
      <S.Title>Listagem de pessoas</S.Title>
      <Table columns={columns} data={data} />
    </S.Container>
  )
}
