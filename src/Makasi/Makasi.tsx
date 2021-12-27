import React from 'react'
import { isBrowser } from 'src/utils/isBrowser'
import {
  TMakasiContext,
  TMakasiInitializer,
  TMakasiProvider
} from './Makasi.types'

export const init: TMakasiInitializer = ({ adminTheme, connector }) => {
  if (!isBrowser()) return
  window.__makasi = {
    adminTheme,
    connector
  }
}

const makasiContext = React.createContext<TMakasiContext>({
  adminTheme: null,
  connector: null
})

export const useMakasiContext = () => React.useContext(makasiContext)

export const MakasiProvider: TMakasiProvider = ({
  connector,
  adminTheme,
  children
}) => {
  return (
    <makasiContext.Provider
      value={{
        connector,
        adminTheme
      }}
    >
      {children}
    </makasiContext.Provider>
  )
}
