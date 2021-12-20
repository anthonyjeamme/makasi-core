import uniqid from 'uniqid'

import { ParamDefinition } from '../Param/ParamDefinition'

import { TSectionData, TSectionInstanceComponent } from './Section.types'

export class SectionDefinition {
  type: string
  label: string
  RenderComponent: TSectionInstanceComponent
  paramsSchema: Record<string, ParamDefinition>
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
    this.paramsSchema = paramsSchema || {}
  }

  generateDefaultParams() {
    return Object.entries(this.paramsSchema).reduce((acc, [key, param]) => {
      acc[key] = param.defaultValue
      return acc
    }, {})
  }

  create(): TSectionData {
    return {
      id: uniqid(),
      data: this.defaultData,
      params: this.generateDefaultParams(),
      type: this.type
    }
  }
}
