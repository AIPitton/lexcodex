import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en.json'
import de from '../locales/de.json'
import ro from '../locales/ro.json'
import hu from '../locales/hu.json'

export const languageResources = {
  en: { translation: en },
  de: { translation: de },
  ro: { translation: ro },
  hu: { translation: hu },
}

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
})

export default i18next
