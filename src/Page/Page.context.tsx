import React, { useState } from 'react'

import { TSectionData } from '../Section/Section.types'
import useRefresh from 'src/utils/hooks/useRefresh'
import {
  TPageContext,
  TPageContextProviderComponent,
  TPageData
} from './Page.types'
import {
  addSectionToPage,
  initPageContextData,
  movePageSection,
  removePageSection
} from './Page.utils'

import { SectionDefinition } from '../Section/SectionDefinition'

const pageContext = React.createContext<TPageContext>(initPageContextData)

export const usePageContext = () => React.useContext<TPageContext>(pageContext)

export const PageContextProvider: TPageContextProviderComponent = ({
  pageDefinition,
  pageData,
  children,
  pageId,
  pageParams
}) => {
  const pageDataRef = React.useRef<TPageData>(pageData)
  const [editionEnabled, setEditionEnabled] = useState<boolean>(false)
  const [refresh] = useRefresh()

  const getSectionData = (sectionId: string) =>
    pageDataRef.current.sections.find((section) => section.id === sectionId)

  const updateSectionData = (sectionId: string, data: TSectionData) => {
    const indexOfSection = pageDataRef.current.sections.findIndex(
      (section) => section.id === sectionId
    )

    if (indexOfSection === -1) return

    pageDataRef.current.sections[indexOfSection] = {
      ...pageDataRef.current.sections[indexOfSection],
      ...data
    }
  }

  const getSectionDefinition = (type: string) => {
    return pageDefinition.sections.find((section) => section.type === type)
  }

  const addSection = (index: number, sectionDefinition: SectionDefinition) => {
    addSectionToPage(pageDataRef, index, sectionDefinition.create())
    refresh()
  }

  const removeSection = (sectionId: string) => {
    removePageSection(pageDataRef, sectionId)
    refresh()
  }

  const moveSection = (sectionId: string, toIndex: number) => {
    movePageSection(pageDataRef, sectionId, toIndex)
    refresh()
  }

  const toJSON = () => {
    return pageDataRef.current
  }

  return (
    <pageContext.Provider
      value={{
        pageId,
        refresh,
        addSection,
        removeSection,
        moveSection,
        editionEnabled,
        setEditionEnabled,
        pageDefinition,
        getSectionDefinition,
        getSectionData,
        updateSectionData,
        toJSON,
        pageParams
      }}
    >
      {children(pageDataRef.current)}
    </pageContext.Provider>
  )
}
