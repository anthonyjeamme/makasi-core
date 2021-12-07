export type TConnector = {
  getPage: (id: string) => Promise<any>
  getPages: () => Promise<any[]>
  updatePage: (data: any) => Promise<void>
  removePage: (id: string) => Promise<void>
  addPage: (data: any) => Promise<void>
}

export type TConnectorFactory = (id: string) => TConnector
