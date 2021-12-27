import { TPageData } from '../Page/Page.types'

export type TConnector = {
  getPage: (id: string) => Promise<TPageData>
  getPages: (type?: string) => Promise<TPageData[]>
  updatePage: (id: string, data: any) => Promise<TPageData>
  removePage: (id: string) => Promise<void>
  addPage: (data: any) => Promise<TPageData>
}

export type TConnectorFactory = (id: string) => TConnector
