import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
  const locales = import.meta.glob('./locales*.json')
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

// Detect default language of browser, and apply it on start
function detectLanguage() {
  const lng = window.navigator.userLanguage || window.navigator.language
  const locales = import.meta.glob('./locales*.json')
  const lang = locales
    .keys()
    .find(key => lng.includes(key.replace('./', '').replace('.json', '')))
  return lang ? lang.replace('./', '').replace('.json', '') : null
}

const i18nv = createI18n({
  locale: localStorage.getItem('lang') || detectLanguage() || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
})

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(i18nv)
app.use(router)
app.use(store)
app.mount('#app')
