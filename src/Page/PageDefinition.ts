import { SectionDefinition } from '../Section/SectionDefinition'
import { TDefaultPageData, TPageConfig } from './Page.types'

// TODO add type ?
export class PageDefinition {
  sections: SectionDefinition[]
  defaultData: TDefaultPageData
  config: TPageConfig

  constructor(
    sections: any[],
    defaultData: TDefaultPageData,
    config?: TPageConfig
  ) {
    this.sections = sections
    this.defaultData = defaultData
    this.config = config
  }

  create() {
    return JSON.parse(JSON.stringify(this.defaultData))
  }
}
