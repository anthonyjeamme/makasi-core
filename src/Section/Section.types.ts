import { TMakasiTheme, TPageData } from '~'

export type TSectionData<TParams = any, TData = any> = {
  id: string
  type: string
  params: TParams
  data: TData
}

export type TSectionComponent = (props: {
  section: TSectionData
  theme: TMakasiTheme
  index: number
  data: TPageData
}) => JSX.Element

export type TSectionContext = {
  id: string
  getField: (fieldName: string) => any
  updateField: (fieldName: string, data: any) => any
  getParam: (fieldName: string) => any
  updateParam: (fieldName: string, data: any) => any
  refresh: () => void
  setIsFocused: (isFocused: boolean) => void
}

export type TSectionInstanceComponent<TParams = any, TData = any> = (
  data: TSectionData<TParams, TData>
) => JSX.Element

export type TSectionDefinitionPreset = {
  label: string
  previewImage: any
  defaultParams: any
  defaultData: any
}
