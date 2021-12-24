export type TEditableComponent<TProps> = (
  props: { field: string } & TProps
) => JSX.Element

export type TEditableInitializer = any
