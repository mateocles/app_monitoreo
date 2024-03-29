const language = {
  es: 'Español',
  en: 'Ingles'
}
const input = {
  username: 'Username',
  pass: 'Contraseña'
}
const title = {
  welcome: 'Bienvenido!'
}
const button = {
  login: 'Iniciar sesión',
  signup: 'Registrarse',
  back: 'Atrás',
  logout: 'Cerrar sesión'
}

const error = {
  required: 'Todos los campos son requeridos',
  login: {
    USERNAME: 'El nombre de usuario debe tener más de 4 caracteres.',
    PASS: 'La contraseña debe tener más de 8 caracteres.',
    ERROR_LOGIN: 'Lo sentimos tenemos un problema, intentelo más tarde',
    USER_NOT_EXIST: 'El usuario no existe',
    IS_NOT_CLIENT: 'Este usuario no es un cliente',
    CLIENT_INACTIVE: 'Cliente inactivo',
    USER_INACTIVE: 'Usuario inactivo',
    ERROR_LOGIN: 'Error al digitar el usuario y contraseña',
    ERROR_MSG: 'Intenatalo nuevamente'
  },
  signup: {
    EMAIL_IN_USE: 'Este correo ya existe'
  }
}

const label = {
  email: 'Correo',
  password: 'Contraseña',
  repitPassword: 'Repitir contraseña',
  name: 'Nombres',
  lastname: 'Apellidos',
  phone: 'Celular',
  city: 'Ciudad',
  country: 'País',
  language: 'Idioma',
  accountXmQuestion: '¿Tienes cuenta de XM?',
  why: '¿Cual?',
  selectItem: 'Seleccionar',
  terms: 'Políticas y acuerdos de privacidad'
}

export default {
  button,
  error,
  label,
  language,
  input,
  title
}