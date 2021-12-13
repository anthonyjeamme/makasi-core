import React from 'react'
import { usePageContext } from '../Page/Page.context'
import { SectionContextProvider } from './Section.context'
import { TSectionComponent } from './Section.types'
import { getSectionDefinition } from './Section.utils'

export const Section: TSectionComponent = ({ section, theme, index, data }) => {
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
      {theme?.PreSectionComponent && (
        <theme.PreSectionComponent
          index={index}
          section={section}
          data={data}
        />
      )}
      <sectionDefinition.Component {...section} />

      {theme?.PostSectionComponent && (
        <theme.PostSectionComponent
          index={index}
          section={section}
          data={data}
        />
      )}
    </SectionContextProvider>
  )
}

export default Section
