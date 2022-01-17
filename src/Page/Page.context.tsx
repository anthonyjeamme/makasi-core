import React, { useState } from 'react'

import { TSectionData } from '../Section/Section.types'
import useRefresh from 'src/utils/hooks/useRefresh'
import {
  TPageContext,
  TPageContextProviderComponent,
  TPageData,
  TPageMetadata
} from './Page.types'
import {
  addSectionToPage,
  getPageDataForSave,
  initPageContextData,
  movePageSection,
  removePageSection
} from './Page.utils'

import { SectionDefinition } from '../Section/SectionDefinition'
import { useMakasiContext } from '~'

const pageContext = React.createContext<TPageContext>(initPageContextData)

export const usePageContext = () => React.useContext<TPageContext>(pageContext)

export const PageContextProvider: TPageContextProviderComponent = ({
  pageDefinition,
  pageData,
  children,
  pageId,
  pageParams,
  defaultEditionEnabled = false
}) => {
  const makasiContext = useMakasiContext()
  const pageDataRef = React.useRef<TPageData>(pageData)
  const [editionEnabled, setEditionEnabled] = useState<boolean>(
    defaultEditionEnabled
  )
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

  const updateMetadata = (data: Partial<TPageMetadata>) => {
    pageDataRef.current.metadata = {
      ...pageDataRef.current.metadata,
      ...data
    }
  }

  const updatePage = (data: Partial<TPageData>) => {
    pageDataRef.current = {
      ...pageDataRef.current,
      ...data
    }
  }

  const save = async () => {
    if (!makasiContext.connector) {
      throw 'No connector configured'
    }

    return makasiContext.connector.updatePage(
      pageId,
      getPageDataForSave(pageDataRef.current)
    )
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
        updateMetadata,
        updatePage,
        toJSON,
        pageParams,
        save
      }}
    >
      {children(pageDataRef.current)}
    </pageContext.Provider>
  )
}
