import { TSectionInstanceComponent } from './Section.types'

export class SectionDefinition {
  type: string
  label: string
  RenderComponent: TSectionInstanceComponent
  paramsSchema: any
  defaultData: any

  constructor(
    type: string,
    label: string,
    RenderComponent: TSectionInstanceComponent,
    defaultData?: any,
    paramsSchema?: any
  ) {
    this.type = type
    this.label = label
    this.RenderComponent = RenderComponent
    this.defaultData = defaultData
    this.paramsSchema = paramsSchema
  }
}
