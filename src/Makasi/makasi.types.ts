import { TConnector, TMakasiTheme } from '~'

export type TMakasiInitializer = (params: TMakasiInitializerParams) => void

export type TMakasiGlobalVariable = {
  connector: TConnector
  adminTheme: TMakasiTheme
}

type TMakasiInitializerParams = {
  connector: TConnector
  adminTheme: TMakasiTheme
}
