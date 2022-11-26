import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, SearchField, Table } from 'shared'
import * as S from './styles'

export const ListPeople: React.FC = () => {
  const data = React.useMemo(
    () => [
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101',
        col5: (
          <>
            <Button onClick={() => null}>Teste</Button>
            <Button onClick={() => null}>Teste 1</Button>
          </>
        )
      },
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101',
        col5: (
          <>
            <Button onClick={() => null}>Teste</Button>
            <Button onClick={() => null}>Teste 1</Button>
          </>
        )
      },
      {
        col1: '154.840.397-03',
        col2: 'Pedro Cassa Dias',
        col3: '09/05/2000',
        col4: 'Rua Utrillo 86, Apto.101',
        col5: (
          <>
            <Button onClick={() => null}>Teste</Button>
            <Button onClick={() => null}>Teste 1</Button>
          </>
        )
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
      },
      {
        Header: 'Ações',
        accessor: 'col5'
      }
    ],
    []
  )

  const navigate = useNavigate()

  const handleCreateNewPersonButtonClick = () => navigate('/new-person')

  return (
    <S.Container>
      <S.Title>Listagem de pessoas</S.Title>
      <S.HeaderContainer>
        <SearchField />
        <Button onClick={handleCreateNewPersonButtonClick} outlined>
          Cadastrar
        </Button>
      </S.HeaderContainer>
      <Table columns={columns} data={data} />
    </S.Container>
  )
}
