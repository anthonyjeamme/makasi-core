import React from 'react'
import { TSectionData } from '~'
import { TPageContext, TPageData } from './Page.types'

export const addSectionToPage = (
  pageDataRef: React.MutableRefObject<TPageData>,
  index: number,
  sectionData: TSectionData
) => {
  pageDataRef.current.sections = [
    ...pageDataRef.current.sections.slice(0, index),
    sectionData,
    ...pageDataRef.current.sections.slice(index)
  ]
}

export const removePageSection = (
  pageDataRef: React.MutableRefObject<TPageData>,
  sectionId: string
) => {
  pageDataRef.current.sections = pageDataRef.current.sections.filter(
    (section) => section.id !== sectionId
  )
}

export const movePageSection = (
  pageDataRef: React.MutableRefObject<TPageData>,
  sectionId: string,
  toIndex: number
) => {
  const indexOfSection = pageDataRef.current.sections.findIndex(
    (section) => section.id === sectionId
  )

  if (indexOfSection === -1) return

  const section = pageDataRef.current.sections[indexOfSection]
  const filtered = pageDataRef.current.sections.filter(
    (section) => section.id !== sectionId
  )

  pageDataRef.current.sections = [
    ...filtered.slice(0, toIndex),
    section,
    ...filtered.slice(toIndex)
  ]
}

export const initPageContextData: TPageContext = {
  editionEnabled: false,
  pageDefinition: null,
  addSection: () => null,
  getSectionData: () => null,
  moveSection: () => null,
  removeSection: () => null,
  updateSectionData: () => null,
  refresh: () => null,
  setEditionEnabled: () => null,
  toJSON: () => ({}),
  getSectionDefinition: () => null,
  pageId: null,
  pageParams: null,
  updateMetadata: () => null,
  updatePage: () => null
}
