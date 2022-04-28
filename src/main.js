/* eslint-disable import/extensions */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.css'
import { createI18n } from 'vue-i18n'

import enUS from './locales/en-US.json'
import frCA from './locales/fr-CA.json'

function detectLanguage() {
  const lng = window.navigator.userLanguage || window.navigator.language
  const locales = import.meta.glob('./locales/*.json', { as: 'raw' })
  const keys = Object.keys(locales)
  const lang = keys.find(key => {
    const parsedLang = key.replace('./locales/', '').replace('.json', '')
    const isFound = lng.includes(parsedLang)
    return isFound
  })
  return lang ? lang.replace('./locales/', '').replace('.json', '') : null
}

const i18nv = createI18n({
  locale: localStorage.getItem('lang') || detectLanguage() || 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'fr-CA': frCA,
  },
})

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(i18nv)
app.use(router)
app.use(store)
app.mount('#app')
