import React, { useState } from 'react'

import { TSectionData } from '../Section/Section.types'
import useRefresh from 'src/utils/hooks/useRefresh'
import { TPageContext, TPageData } from './Page.types'
import {
  addSectionToPage,
  initPageContextData,
  movePageSection,
  removePageSection
} from './Page.utils'

const pageContext = React.createContext<TPageContext>(initPageContextData)

export const usePageContext = () => React.useContext<TPageContext>(pageContext)

export const PageContextProvider = ({ pageSchema, pageData, children }) => {
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

    pageDataRef.current.sections[indexOfSection] = data
  }

  const addSection = (index: number, sectionData: TSectionData) => {
    addSectionToPage(pageDataRef, index, sectionData)
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
        refresh,
        addSection,
        removeSection,
        moveSection,
        editionEnabled,
        setEditionEnabled,
        pageSchema,
        getSectionData,
        updateSectionData,
        toJSON
      }}
    >
      {children(pageDataRef.current)}
    </pageContext.Provider>
  )
}
