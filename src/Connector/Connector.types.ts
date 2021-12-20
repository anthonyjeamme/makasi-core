import { TPageData } from '../Page/Page.types'

export type TConnector = {
  getPage: (id: string) => Promise<TPageData>
  getPages: (type?: string) => Promise<TPageData[]>
  updatePage: (id: string, data: any) => Promise<void>
  removePage: (id: string) => Promise<void>
  addPage: (data: any) => Promise<void>
}

export type TConnectorFactory = (id: string) => TConnector
