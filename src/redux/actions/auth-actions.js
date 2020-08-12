export function logIn(login, pass, isSave) {
  return {
    type: 'LOGIN',
    login,
    pass,
    isSave,
  };
}

export function signOut() {
  return {
    type: 'SIGNOUT',
  };
}
