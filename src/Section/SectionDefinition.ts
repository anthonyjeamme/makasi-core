import uniqid from 'uniqid'

import { TEditableInitializer } from '../Editables/Editable.types'

import {
  TSectionData,
  TSectionDefinitionPreset,
  TSectionInstanceComponent
} from './Section.types'

export class SectionDefinition {
  type: string
  label: string
  RenderComponent: TSectionInstanceComponent
  paramsSchema: Record<string, TEditableInitializer>
  defaultData: any
  presets: TSectionDefinitionPreset[]

  constructor(
    type: string,
    label: string,
    RenderComponent: TSectionInstanceComponent,
    defaultData?: any,
    paramsSchema?: any,
    presets?: TSectionDefinitionPreset[]
  ) {
    this.type = type
    this.label = label
    this.RenderComponent = RenderComponent
    this.defaultData = defaultData
    this.paramsSchema = paramsSchema || {}
    this.presets = presets
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
