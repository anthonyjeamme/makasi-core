import React, { useEffect, useState } from 'react'

import { PageContextProvider } from './Page.context'
import { PageContent } from './PageContent'

import { PageDefinition } from './PageDefinition'

export const page = (pageDefinition: PageDefinition, pageId: string) => () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    window.__makasi.connector.getPage(pageId).then((data) => {
      setData(data || pageDefinition.defaultData)
    })
  }, [])

  if (data === null) return null

  return (
    <PageContextProvider
      pageDefinition={pageDefinition}
      pageData={data}
      pageId={pageId}
    >
      {(pageData) => (
        <PageContent
          data={pageData}
          dataConnector={window.__makasi.connector}
          theme={window.__makasi.adminTheme}
        />
      )}
    </PageContextProvider>
  )
}
