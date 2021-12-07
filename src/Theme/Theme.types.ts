import React from 'react'
import { TConnector } from '~'
import { TPageData } from '../Page/Page.types'
import { TSectionData } from '../Section/Section.types'

export type TMakasiTheme = {
  PageWrapper?: React.FC
  PrePageComponent?: (props: TMakasiPageThemeProps) => JSX.Element
  PostPageComponent?: (props: TMakasiPageThemeProps) => JSX.Element
  PreSectionComponent?: (props: TMakasiSectionThemeProps) => JSX.Element
  PostSectionComponent?: (props: TMakasiSectionThemeProps) => JSX.Element
}

export type TMakasiPageThemeProps = {
  data: TPageData
  dataConnector: TConnector
}

export type TMakasiSectionThemeProps = {
  data: TPageData
  index: number
  section: TSectionData
}
