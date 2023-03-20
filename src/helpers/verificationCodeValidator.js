export function verificationCodeValidator(verificationCode) {
  const re = /^\d+$/
  const re1 = /^[0-9]{6,6}$/g

  if (verificationCode.toString().length <= 0) {
    return "Verification Code can't be empty."
  }
  if (!re.test(verificationCode)) {
    return 'Verification Code must be numbers only'
  }
  if (!re1.test(verificationCode)) {
    return 'Verification Code must be 6 digits!'
  }
  return ''
}
