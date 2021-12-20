import { SectionDefinition } from '../Section/SectionDefinition'
import { TDefaultPageData } from './Page.types'

export class PageDefinition {
  sections: SectionDefinition[]
  defaultData: TDefaultPageData

  constructor(sections: any[], defaultData: TDefaultPageData) {
    this.sections = sections
    this.defaultData = defaultData
  }
}
