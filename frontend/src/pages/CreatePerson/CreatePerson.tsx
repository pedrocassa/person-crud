import { FieldArray, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'shared'
import { AddressForm, PersonForm } from './components'
import * as S from './styles'
import { initialValues, validationSchema } from './validation'
import { addressFormInitialValues } from './validation/CreatePersonValidation'

export const CreatePerson: React.FC = () => {
  const navigate = useNavigate()

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
        {({ values, handleSubmit }) => (
          <>
            <S.SectionHeader>
              <S.SectionTitle>Informações pessoais</S.SectionTitle>
              <S.Divider />
            </S.SectionHeader>
            <PersonForm />

            <FieldArray
              name="addresses"
              render={(arrayHelpers) => (
                <>
                  {values.addresses && values.addresses.length > 0 ? (
                    values.addresses.map((address, index) => (
                      <>
                        <S.SectionHeader>
                          <S.SectionTitle>Endereço {index + 1}</S.SectionTitle>
                          <S.Divider />
                        </S.SectionHeader>
                        <AddressForm
                          arrayHelpers={arrayHelpers}
                          formIndex={index}
                          key={index}
                        />
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </>
              )}
            />
            <S.ButtonContainer>
              <Button
                type={'button'}
                backgroundColor={'cancel'}
                onClick={() => navigate(-1)}
              >
                Cancelar
              </Button>
              <Button type={'submit'} onClick={() => handleSubmit()} outlined>
                Cadastrar
              </Button>
            </S.ButtonContainer>
          </>
        )}
      </Formik>
    </S.Container>
  )
}
