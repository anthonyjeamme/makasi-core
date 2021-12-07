import React from 'react'
import { usePageContext } from '../Page/Page.context'
import { SectionContextProvider } from './Section.context'
import { TSectionComponent } from './Section.types'
import { getSectionDefinition } from './Section.utils'

export const Section: TSectionComponent = ({ section }) => {
  const pageContext = usePageContext()

  const sectionDefinition = getSectionDefinition(
    pageContext.pageSchema,
    section
  )

  if (!sectionDefinition)
    return pageContext.editionEnabled ? (
      <div
        style={{
          padding: '50px 0',
          textAlign: 'center'
        }}
      >
        Unknown section
      </div>
    ) : null

  return (
    <SectionContextProvider section={section}>
      <sectionDefinition.Component {...section} />
    </SectionContextProvider>
  )
}

export default Section
