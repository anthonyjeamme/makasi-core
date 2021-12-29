import React from 'react'

import { SectionDefinition } from '../Section/SectionDefinition'
import { TSectionData } from '../Section/Section.types'
import { PageDefinition } from './PageDefinition'

export type TPageSchema = {
  defaultData: TPageData
  sections: any[]
  params?: TPageParams
}

export type TPageParams = {
  fixedSections?: boolean
}

export type TPageContextProviderComponent = React.FC<{
  pageDefinition: PageDefinition
  pageData: TPageData
  pageId: string
  pageParams: any
  defaultEditionEnabled?: boolean
  children: (data: TPageData) => JSX.Element
}>

export type TPageData = {
  id: string
  slug: string
  sections: TSectionData[]
  metadata: TPageMetadata
}

export type TDefaultPageData = {
  sections: TSectionData[]
  metadata: TPageMetadata
  id?: string
  slug?: string
}

export type TPageMetadata = {
  title: string
  description: string
  shortDescription?: string
}

export type TPageContext = {
  pageId: string
  editionEnabled: boolean
  setEditionEnabled: (editionEnabled: boolean) => void
  pageDefinition: PageDefinition
  getSectionData: (sectionId: string) => TSectionData
  updateSectionData: (sectionId: string, data: TSectionData) => void
  refresh: () => void

  getSectionDefinition: (type: string) => SectionDefinition

  addSection: (index: number, sectionDefinition: SectionDefinition) => void
  removeSection: (sectionId: string) => void
  moveSection: (sectionId: string, toIndex: number) => void

  toJSON: () => any
  pageParams: any
  updateMetadata: (data: Partial<TPageMetadata>) => void
}

export type TPageConfig = {
  sections?: {
    disableMove?: boolean
    disableAdd?: boolean
    disableRemove?: boolean
  }
}
