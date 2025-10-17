const i18next = require('../config/i18n');

const i18nMiddleware = (req, res, next) => {
  const language = req.headers['accept-language'] || 'en';
  i18next.changeLanguage(language);
  req.i18n = i18next;
  next();
};

module.exports = i18nMiddleware;