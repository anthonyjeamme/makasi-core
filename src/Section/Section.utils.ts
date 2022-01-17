import { TSectionContext } from './Section.types'
import { PageDefinition } from '../Page/PageDefinition'
import { TSectionData } from './Section.types'

export const getSectionDefinition = (
  pageDefinition: PageDefinition,
  section: TSectionData
) => pageDefinition.sections.find(({ type }) => type === section.type)

export const initSectionContextData: TSectionContext = {
  id: null,
  getField: () => null,
  updateField: () => null,
  refresh: () => null,
  getParam: () => null,
  updateParam: () => null,
  setIsFocused: () => null
}
