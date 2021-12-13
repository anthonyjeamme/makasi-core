import { TSectionData, TSectionDefinition } from '../Section/Section.types'

export type TPageSchema = {
  defaultData: TPageData
  sections: any[]
  params?: TPageParams
}

export type TPageParams = {
  fixedSections?: boolean
}

export type TPageData = {
  sections: TSectionData[]
  metadata: TPageMetadata
}

export type TPageMetadata = {
  title: string
  description: string
}

export type TPageContext = {
  editionEnabled: boolean
  setEditionEnabled: (editionEnabled: boolean) => void
  pageSchema: TPageSchema
  getSectionData: (sectionId: string) => TSectionData
  updateSectionData: (sectionId: string, data: TSectionData) => void
  refresh: () => void

  getSectionDefinition: (type: string) => TSectionDefinition

  addSection: (index: number, sectionData: TSectionData) => void
  removeSection: (sectionId: string) => void
  moveSection: (sectionId: string, toIndex: number) => void

  toJSON: () => any
}
