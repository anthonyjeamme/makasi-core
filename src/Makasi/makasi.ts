import { isBrowser } from 'src/utils/isBrowser'
import { TMakasiInitializer } from './makasi.types'

export const init: TMakasiInitializer = ({ adminTheme, connector }) => {
  if (!isBrowser()) return
  window.__makasi = {
    adminTheme,
    connector
  }
}
