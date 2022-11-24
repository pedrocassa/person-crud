import { Formik } from 'formik'
import React from 'react'
import { AddressForm, PersonForm } from './components'
import * as S from './styles'
import { initialValues, validationSchema } from './validation'

export const CreatePerson: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Cadastro de pessoa</S.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {() => (
          <>
            <PersonForm />
            <AddressForm />
          </>
        )}
      </Formik>
    </S.Container>
  )
}
