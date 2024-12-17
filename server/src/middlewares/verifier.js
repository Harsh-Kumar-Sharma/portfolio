const config = require('../config/config');

const verifier = (req, res, next) => {
  const { subscriptionkey } = req.headers

  if (req.originalUrl === '/api/auth/login' || req.originalUrl === '/api/auth/logout' || req.originalUrl === '/api/auth/session') {
    return next()
  }

  if (subscriptionkey !== config.subscriptionKey) {
    return next({ message: 'Invalid subscription key' })
  }

  return next()
};

module.exports = verifier;
