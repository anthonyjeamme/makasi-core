export type TEditableComponent<TProps> = (
  props: { field: string } & TProps
) => JSX.Element
