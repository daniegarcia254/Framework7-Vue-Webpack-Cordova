import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

console.log("LANGUAGE", window.navigator.userLanguage || window.navigator.language);

const i18n = new VueI18n({
  locale: window.navigator.userLanguage || window.navigator.language,
  fallbackLocale: 'en',
  messages: {
    'en': require('./en.json'),
    'es': require('./es.json')
  }
});

if (module.hot) {
  module.hot.accept(['./en.json', './es.json'], () => {
    i18n.setLocaleMessage('en', require('./en.json'));
    i18n.setLocaleMessage('es', require('./es.json'));
    console.log('hot reload', this, arguments);
  });
}

export default i18n;
