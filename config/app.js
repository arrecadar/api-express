/**
 * Application settings
 */
module.exports = {
  port: process.env.PORT || 3000,
  key: process.env.APP_KEY || 'your lack of faith is disturbing',
  sessionKey: process.env.SESSION_KEY || 'the cake is a lie',
  env: process.env.NODE_ENV || 'production',
  locale: process.env.APP_LOCALE || 'en_us'
}
