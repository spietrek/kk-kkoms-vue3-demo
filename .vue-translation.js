import { join } from 'path'
import { JSONAdapter } from 'vue-translation-manager'

export const srcPath = join(__dirname, 'src/')
export const adapter = new JSONAdapter({
  path: join(__dirname, 'src/locales/'),
})
export const languages = ['en', 'ca']
