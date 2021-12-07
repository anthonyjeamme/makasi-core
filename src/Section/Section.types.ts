export type TSectionData<TParams = any, TData = any> = {
  id: string
  type: string
  params: TParams
  data: TData
}

export type TSectionComponent = (props: {
  section: TSectionData
}) => JSX.Element

export type TSectionContext = {
  getField: (fieldName: string) => any
  updateField: (fieldName: string, data: any) => any
  getParam: (fieldName: string) => any
  updateParam: (fieldName: string, data: any) => any
  refresh: () => void
}

export type TSectionDefinition = {
  type: string
  label: string
  Component: TSectionInstanceComponent
  paramsSchema: TSectionDefinitionSchema
  defaultData: any
}

export type TSectionDefinitionSchema = any

export type TSectionInstanceComponent<TParams = any, TData = any> = (
  data: TSectionData<TParams, TData>
) => JSX.Element
