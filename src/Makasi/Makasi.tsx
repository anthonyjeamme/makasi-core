import React, { useState } from 'react'
import { isBrowser } from 'src/utils/isBrowser'
import { TConnector } from '~'
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
  connector: null,
  setConnector: () => {}
})

export const useMakasiContext = () => React.useContext(makasiContext)

export const MakasiProvider: TMakasiProvider = ({
  connector: defaultConnector,
  adminTheme,
  children
}) => {
  const [connector, setConnector] = useState<TConnector>(defaultConnector)

  return (
    <makasiContext.Provider
      value={{
        connector,
        adminTheme,
        setConnector
      }}
    >
      {children}
    </makasiContext.Provider>
  )
}
