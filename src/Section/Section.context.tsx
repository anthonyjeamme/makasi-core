import React, { useState } from 'react'
import { usePageContext } from 'src/Page/Page.context'
import useRefresh from 'src/utils/hooks/useRefresh'
import { TSectionContext } from './Section.types'
import { initSectionContextData } from './Section.utils'

const sectionContext = React.createContext<TSectionContext>(
  initSectionContextData
)

export const useSectionContext = () =>
  React.useContext<TSectionContext>(sectionContext)

export const SectionContextProvider = ({ section, children }) => {
  const pageContext = usePageContext()
  const [refresh] = useRefresh()
  const [isFocused, setIsFocused] = useState(false)

  const getField = (fieldName: string) => {
    return section.data[fieldName]
  }

  const updateField = (fieldName: string, data: any) => {
    pageContext.getSectionData(section.id).data[fieldName] = data
  }

  const getParam = (name: string) =>
    pageContext.getSectionData(section.id).params[name]

  const updateParam = (name: string, data: any) => {
    pageContext.getSectionData(section.id).params[name] = data
  }

  return (
    <section
      className={`${isFocused ? 'focused' : ''}`}
      style={{ position: 'relative' }}
    >
      <sectionContext.Provider
        value={{
          id: section.id,
          getField,
          updateField,
          getParam,
          updateParam,
          refresh,
          setIsFocused
        }}
        {...{ children }}
      />
    </section>
  )
}
