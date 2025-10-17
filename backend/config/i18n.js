const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const path = require('path');

i18next
  .use(Backend)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    preload: ['en', 'hi', 'ta', 'te', 'ja'],
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json')
    },
    interpolation: {
      escapeValue: false
    }
  });

module.exports = i18next;