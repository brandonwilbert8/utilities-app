export function usernameValidator(username) {
  if (!username) {
    return "Username can't be empty."
  }
  if (username.length >= 10) {
    return 'Username cannot exceed 10 characters'
  }
  return ''
}
