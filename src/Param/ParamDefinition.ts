export class ParamDefinition {
  type: string
  label: string
  defaultValue: any

  constructor(type: string, label: string, defaultValue: any) {
    this.type = type
    this.label = label
    this.defaultValue = defaultValue
  }
}
