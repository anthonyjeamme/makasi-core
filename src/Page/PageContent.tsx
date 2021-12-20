import React from 'react'

import { Section, TConnector, TMakasiTheme } from '~'
import { usePageContext } from './Page.context'

export const PageContent = ({
  data,
  theme,
  dataConnector
}: {
  data: any
  dataConnector: TConnector
  theme?: TMakasiTheme
}) => {
  const pageContext = usePageContext()

  const PageWrapper = theme.PageWrapper
    ? theme.PageWrapper
    : ({ children }) => children

  return (
    <PageWrapper>
      <div className={`Page${pageContext.editionEnabled ? ' edition' : ''}`}>
        {theme?.PrePageComponent && (
          <theme.PrePageComponent data={data} dataConnector={dataConnector} />
        )}

        {data.sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            theme={theme}
            index={index}
            data={data}
          />
        ))}

        {theme?.PostPageComponent && (
          <theme.PostPageComponent data={data} dataConnector={dataConnector} />
        )}
      </div>
    </PageWrapper>
  )
}
