import { validateCpf } from 'shared'
import * as yup from 'yup'

yup.addMethod<yup.StringSchema>(
  yup.string,
  'cpf',
  function (message = 'CPF inválido') {
    return this.test('cpf', message, function (value) {
      return validateCpf(value)
    })
  }
)
