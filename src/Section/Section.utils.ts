import { TSectionContext } from '~'
import { TPageSchema } from '../Page/Page.types'
import { TSectionData } from './Section.types'

export const getSectionDefinition = (
  pageSchema: TPageSchema,
  section: TSectionData
) => pageSchema.sections.find(({ type }) => type === section.type)

export const initSectionContextData: TSectionContext = {
  getField: () => null,
  updateField: () => null,
  refresh: () => null,
  getParam: () => null,
  updateParam: () => null,
  setIsFocused: () => null
}
