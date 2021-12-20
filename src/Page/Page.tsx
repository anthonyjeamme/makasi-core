import React, { useEffect, useState } from 'react'

import { PageContextProvider } from './Page.context'
import { TPageSchema } from './Page.types'
import { TConnector } from '../Connector/Connector.types'
import { TMakasiTheme } from '~'
import { PageContent } from './PageContent'

export const page =
  (
    pageSchema: TPageSchema,
    dataConnector: TConnector,
    theme: TMakasiTheme,
    pageId: string
  ) =>
  () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      dataConnector.getPage(pageId).then((data) => {
        setData(data || pageSchema.defaultData)
      })
    }, [])

    if (data === null) return null

    return (
      <PageContextProvider
        pageSchema={pageSchema}
        pageData={data}
        pageId={pageId}
      >
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
