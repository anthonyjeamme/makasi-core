import React, { useEffect, useState } from 'react'

import Section from '../Section/Section'
import { PageContextProvider } from './Page.context'
import { TPageSchema } from './Page.types'
import { TConnector } from '../Connector/Connector.types'
import { TMakasiTheme, usePageContext } from '~'

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

export const page =
  (pageSchema: TPageSchema, dataConnector: TConnector, theme: TMakasiTheme) =>
  () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      // @ts-ignore
      dataConnector.getData().then((data) => {
        setData(data || pageSchema.defaultData)
      })
    }, [])

    if (data === null) return null

    return (
      <PageContextProvider pageSchema={pageSchema} pageData={data}>
        {(pageData) => (
          <PageContent
            data={pageData}
            dataConnector={dataConnector}
            theme={theme}
          />
        )}
      </PageContextProvider>
    )
  }
