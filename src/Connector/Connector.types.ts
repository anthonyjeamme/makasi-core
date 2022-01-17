import { TResource } from 'src/Resource/Resource.types'
import { TPageData } from '../Page/Page.types'

export type TConnector = {
  getPage: (id: string) => Promise<TPageData>
  getPages: (type?: string) => Promise<TPageData[]>
  updatePage: (id: string, data: any) => Promise<TPageData>
  removePage: (id: string) => Promise<void>
  addPage: (data: any) => Promise<TPageData>

  //
  addResource: (data: any) => Promise<TResource>
  getResource: (id: string) => Promise<TResource>
  updateResource: (id: string, data: any) => Promise<TResource>
  removeResource: (id: string) => Promise<void>

  //
  addResourceToPage: (resourceId: string, pageId: string) => Promise<void>
  removePageResource: (resourceId: string, pageId: string) => Promise<void>
}

export type TConnectorFactory = (id: string) => TConnector
