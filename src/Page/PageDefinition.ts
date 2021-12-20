import { TPageData } from './Page.types'

export class PageDefinition {
  sections: any[]
  defaultData: TPageData

  // TODO sections: TSectionDefinition[]
  constructor(sections: any[], defaultData: TPageData) {
    this.sections = sections
    this.defaultData = defaultData
  }
}
