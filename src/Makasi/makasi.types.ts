import React from 'react'

import { TConnector } from '../Connector/Connector.types'
import { TMakasiTheme } from '../Theme/Theme.types'

export type TMakasiInitializer = (params: TMakasiInitializerParams) => void

export type TMakasiGlobalVariable = {
  connector: TConnector
  adminTheme: TMakasiTheme
}

type TMakasiInitializerParams = {
  connector: TConnector
  adminTheme: TMakasiTheme
}

export type TMakasiProvider = React.FC<TMakasiProviderProps>

type TMakasiProviderProps = {
  connector: TConnector
  adminTheme: TMakasiTheme
}

export type TMakasiContext = {
  connector: TConnector
  adminTheme: TMakasiTheme
}
