export default {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  refreshToken: {
    secret: process.env.REFRESH_SECRET,
    expiresIn: process.env.REFRESH_EXPIRES_IN,
    duration: Number(process.env.REFRESH_DURATION),
  },
  emailToken: {
    secret: process.env.EMAIL_TOKEN_SECRET,
    expiresIn: process.env.EMAIL_TOKEN_EXPIRES_IN,
  },
  passwordToken: {
    secret: process.env.PASSWORD_TOKEN_SECRET,
    expiresIn: process.env.PASSWORD_TOKEN_EXPIRES_IN,
  },
}
