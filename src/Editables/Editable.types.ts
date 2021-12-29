export type TEditableComponent<TProps> = (
  props: { field: string; onChange?: (data: any) => void } & TProps
) => JSX.Element

export type TEditableInitializer = any
