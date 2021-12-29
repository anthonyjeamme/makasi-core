import React, { useEffect, useState } from 'react'
import { useMakasiContext } from '~'

import { PageContextProvider } from './Page.context'
import { PageContent } from './PageContent'

import { PageDefinition } from './PageDefinition'

export const Page = ({
  pageDefinition,
  pageId,
  staticData = null,
  pageParams = {}
}) => {
  const [data, setData] = useState(staticData)

  const { connector, adminTheme } = useMakasiContext()

  useEffect(() => {
    if (!staticData && connector)
      connector.getPage(pageId).then((data) => {
        setData(data || pageDefinition.defaultData)
      })
  }, [])

  if (data === null) return null

  return (
    <PageContextProvider
      pageDefinition={pageDefinition}
      pageData={data}
      pageId={pageId}
      pageParams={pageParams}
    >
      {(pageData) => (
        <PageContent
          data={pageData}
          dataConnector={connector}
          theme={adminTheme}
        />
      )}
    </PageContextProvider>
  )
}

export const page =
  (
    pageDefinition: PageDefinition,
    pageId: string,
    staticData = null,
    pageParams = {}
  ) =>
  () => {
    return (
      <Page
        pageDefinition={pageDefinition}
        pageId={pageId}
        staticData={staticData}
        pageParams={pageParams}
      />
    )
  }
