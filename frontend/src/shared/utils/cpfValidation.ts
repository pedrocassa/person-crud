export function validateCpf(cpf: string | null = ''): boolean {
  // CPFs inválidos conhecidos
  const invalids = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  if (!cpf) {
    return false
  }
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf === '') {
    return false
  }
  if (cpf.length !== 11 || invalids.includes(cpf)) {
    return false
  }
  let add = 0
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i), 10) * (10 - i)
  }
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  if (rev !== parseInt(cpf.charAt(9), 10)) {
    return false
  }
  add = 0
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i), 10) * (11 - i)
  }
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }
  if (rev !== parseInt(cpf.charAt(10), 10)) {
    return false
  }
  return true
}
